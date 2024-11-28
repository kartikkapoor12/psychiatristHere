const express = require ("express");
const cors = require("cors");
const mysql = require("mysql2");   //since the security was compromised in mysql normal one 

const app = express ();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user :"root",
    password: "root",
    database:"jyoti_project"
})

app.get("/",(req,res)=>{
    const sql = "SELECT * FROM jyoti_project.user;";
    db.query(sql, (err,data) => {
        if(err) 
             return res.json ("error");
        return res.json(data);    
    }
)
})

app.post("/submit", (req, res) => {
    // Start the transaction
    db.beginTransaction((err) => {
        if (err) return res.json({ error: "Transaction start failed", details: err });
     
       // Build the query dynamically based on provided input
       let checkUserSql = "SELECT uid FROM jyoti_project.user WHERE ";
       const checkUserParams = [];

       if (req.body.email && req.body.email.trim() !== '') {
           checkUserSql += "email = ?";
           checkUserParams.push(req.body.email);
       }

       if (req.body.phoneNumber && req.body.phoneNumber.trim() !== '') {
           if (checkUserParams.length > 0) checkUserSql += " AND ";
           checkUserSql += "phone_number = ?";
           checkUserParams.push(req.body.phoneNumber);
       }

        // Check if user already exists
        db.query(checkUserSql, checkUserParams, (err, results) => {
            if (err) {
                return db.rollback(() => res.json({ error: "Failed to check user existence", details: err }));
            }

            let userId;

            if (results.length > 0) {
                // User exists, get their ID
                userId = results[0].uid;
                proceedWithAppointmentAndConsultation(userId);
            } else {
                // Insert new user
                const sqlUser = "INSERT INTO jyoti_project.user(`name`, `dob`, `phone_number`, `email`) VALUES(?)";
                const userValues = [
                    req.body.fullName,
                    req.body.dateOfBirth,
                    req.body.phoneNumber,
                    req.body.email
                ];

                db.query(sqlUser, [userValues], (err, resultUser) => {
                    if (err) {
                        // Rollback transaction on error
                        return db.rollback(() => res.json({ error: "Failed to insert user", details: err }));
                    }
                    userId = resultUser.insertId; // Capture the new user ID
                    proceedWithAppointmentAndConsultation(userId);
                });
            }

            function proceedWithAppointmentAndConsultation(userId) {
                const sqlAppointmentDb = "INSERT INTO jyoti_project.appointment(`uid`,`date`,`time_Slot`) VALUES(?)";
                const appointmentValues = [
                    userId,
                    req.body.appointmentDate,
                    req.body.timeSlot
                ];

                db.query(sqlAppointmentDb, [appointmentValues], (err, resultAppointment) => {
                    if (err) {
                        // Rollback transaction on error
                        return db.rollback(() => res.json({ error: "Failed to insert appointment", details: err }));
                    }

                    const appointmentId = resultAppointment.insertId;
                    const sqlConsultation = "INSERT INTO jyoti_project.consultation_details( appointment_id,uid, consultation_For, preferred_Contact, session_Frequency, virtual_Counseling, previous_Counseling, previous_Therapy_Type, taking_Medication, medication_List, reason_For_Counseling, mental_Health_Diagnosis, diagnos_is_Details, recent_Life_Changes, additional_Notes, consent) VALUES(?)";

                    const consultationValues = [
                        appointmentId,
                        userId,
                        req.body.consultationFor,
                        req.body.preferredContact,
                        req.body.sessionFrequency,
                        req.body.virtualCounseling,
                        req.body.previousCounseling,
                        req.body.previousTherapyType,
                        req.body.takingMedication,
                        req.body.medicationList,
                        req.body.reasonForCounseling,
                        req.body.mentalHealthDiagnosis,
                        req.body.diagnosisDetails,
                        req.body.recentLifeChanges,
                        req.body.additionalNotes,
                        req.body.consent
                    ];

                    db.query(sqlConsultation, [consultationValues], (err, resultConsultation) => {
                        if (err) {
                            // Rollback transaction on error
                            return db.rollback(() => res.json({ error: "Failed to insert consultation details", details: err }));
                        }

                        // Commit the transaction
                        db.commit((err) => {
                            if (err) {
                                return db.rollback(() => res.json({ error: "Commit failed", details: err }));
                            }
                            return res.json({ message: "All data inserted successfully", userId, appointment: resultAppointment, consultation: resultConsultation });
                        });
                    });
                });
            }
        });
    });
});




app.listen(8081, () =>{
    console.log("listening");
})