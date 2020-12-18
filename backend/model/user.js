const mongoose = require('mongoose');
 var userSchema = new mongoose.Schema({
     first_name: {type: String, required: true},
     last_name: {type: String, required: true},
     email_address: {type: String, required: true},
     contact_number: {type: String, required: true},
     location: {type: String, required: true},
     name_of_institution: {type:String, required: true},
     institute_type: {type:String, required: true},
     role_in_institution: {type:String, required: true},
     website_link: {type:String, required: true},
     password: {type: String, required: true}
 })

var User = mongoose.model('User', userSchema);
module.exports = User;


// Email containing username & password to be sent to students whose name is in list uploaded by institute
// Login api with username and password sent in email by the institute
// JWT Authentication & token to be sent on successfull login
// Change Password (Optional)
// Profile details including student's personal, family, address, academic & interest/hobbies to be submitted for particular student_id
// For existing student details to be fetched with student_id/email_address

// Login api for student
// http://localhost:5000/api/student/login, body: {email_address: value, password: value}
// {
//     status: 200,
//     message: 'Logged In Successfully',
//     data: {
//         token: value
//     }
// }
//  token value: {
//     email_address: 'value',
//     user_name: 'value'
// }

// Fetching user/student profile details either with email_address or student_id
// email_address: 'rohankanwar01@gamil.com';
// student_id: 'id'

// http://localhost:5000/api/student/getProfileDetails, body: (email_address)
// http://localhost:5000/api/student/getProfileDetails/student_id, params: student_id


// {
            // status: 200,
            // message: 'Fetched details successfully',
            // data: {
                //         id: '';
                //         personal_details: {
                //             name: 'value'
                //         };
                //         address_details: {
                //             name: 'value'
                //         };
                //         parent_details: {
                //             name: 'value'
                //         };
                //         family_details: {
                //             name: 'value'
                //         };
                //         academic_details: {
                //             name: 'value'
                //         };
                //         hobbies: []
            // }
// }

// Student can enter profile details

// http://localhost:5000/api/student/createProfile, body: {email_address: '', personal_details: {last_name: 'value'}, academic_details: {name: 'value'}}

// {
//     status: 200,
//     message: 'created profile successfully'
// }

//Student can edit profile details

// http://localhost:5000/api/student/editProfile/student_id, body: {email_address: '', personal_details: {first_name: "new value"}, family_details: {father_age: new_value}}


// {
//     status: 200,
//     message: 'student details edited successfully',
//     data: {}
// }


// Notifications, Attendance, Reports, Payments, Assignments, Communication, Exam Module
// Notifications - Notifications regarding assignments(new assignment, submission & report), student should be notified,
                // Notification regarding reports
                // Notifications regarding succesfull or failed payments
                // Notifications regarding exam module

// Attendance - 
// Reports - 
// Assignments - 
// Payments - 
// Communication - 
// Exam Module - 