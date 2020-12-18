//  var userSchema = new mongoose.Schema({
    //      first_name: {type: String, required: true},
    //      last_name: {type: String, required: true},
    //      email_address: {type: String, required: true},
    //      contact_number: {type: String, required: true},
    //      location: {type: String, required: true},
    //      name_of_institution: {type:String, required: true},
    //      institute_type: {type:String, required: true},
//      role_in_institution: {type:String, required: true},
//      website_link: {type:String, required: true},
//      password: {type: String, required: true}
//  })

// var User = mongoose.model('User', userSchema);
// module.exports = User;


const mongoose = require('mongoose');
const GENDERS = ["M", "F"];
const BLOOD_GROUP = ["A", "B", "AB", "O"];
const MARITAL_STATUS = ["Single", "Married"];
const EDUCATION_FIELDS = ["Phd", "Mphil", "Post Graduation", "Higher Secondary Education", "Schooling"];
const EDUCATION_BOARDS = []
var studentSchema = new mongoose.Schema({
    personal_details: {
        first_name: {
            type: String,
            required: true
        },
        middle_name: {
            type: String,
            required: true
        },
        last_name: {
            type: String,
            required: true
        },
        father_name: {
            type: String, 
            required: true
        },
        mother_name: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            enum: GENDERS,
            required: true
        },
        blood_group: {
            type: String,
            enum: BLOOD_GROUP,
            required: true
        },
        marital_status: {
            type: String,
            enum: MARITAL_STATUS,
            required: true
        },
        date_of_birth: {
            type: Date,
            required: true
        },
        mobile_number: {
            type: Number,
            required: true
        },
        email_address: {
            type: String,
            required: true
        },
        alternate_contact: {
            type: Number
        }
    },

    address_details: {
        current_address_detail: {
            house_number: {
                type: String
            },
            street_number: {
                type: String
            },
            pin_code: {
                type: String,
                required: true
            },
            city: {
                type: String,
                required: true
            },
            state: {
                type: String,
                required: true
            },
        },

        permanent_address_detail: {
            house_number: {
                type: String
            },
            street_number: {
                type: String
            },
            pin_code: {
                type: String,
                required: true
            },
            city: {
                type: String,
                required: true
            },
            state: {
                type: String,
                required: true
            }
        }
    },

    family_details: {
        father_details: {
            name: {
                type: String,
                default: personal_details.father_name
            },
            date_of_birth: {
                type: Date,
                required: true
            },
            age: {
                type: Number,
                required: true
            },
            email_address: {
                type: String,
                required: true
            },
            contact_number: {
                type: Number,
                required: true
            },
            qualification: {
                type: String,
                required: true
            },
            occupation: {
                type: String,
                required: true
            }           
        },

        mother_details: {
            name: {
                type: String,
                default: personal_details.mother_name
            },
            date_of_birth: {
                type: String,
                required: true
            },
            age: {
                type: Number,
                required: true
            },
            email_address: {
                type: String,
                required: true
            },
            contact_number: {
                type: Number,
                required: true
            },
            qualification: {
                type: String,
                required: true
            },
            occupation: {
                type: String,
                required: true
            }           
        }
    },

    academic_details: {
        highest_education: {
            type: String,
            enum: EDUCATION_FIELDS,
            required: true
        },
        ssc_qualifications: {
            state: {
                type: String,
                required: true
            },
            name_of_board: {
                type: String,
                enum: EDUCATION_BOARDS,
                required: true
            },
            institute_name: {
                type: String,
                required: true
            },
            institute_address: {
                type: String,
                required: true
            },
            mode_of_clearance: {
                type: String,
                required: true
            },
            passing_year: {
                type: Date,
                required: true
            },
            marks_obtained: {
                type: Number,
                required: true
            },
            total_marks: {
                type: String,
                required: true
            },
            grade_obtained: {
                type: String,
                required: true
            },
            medium_of_education: {
                type: String,
                required: true
            },
            enrollment_number: {
                type: Number,
                required: true
            },
            documents: {
                passing_certificate: {
                    type: Image,
                    required: true
                },
                leaving_certificate: {
                    type:Image,
                    required: true
                },
                bonafide: {
                    type: Image,
                    required: true
                },
                provisional_certificate: {
                    type:Image,
                    required: true
                },
                migration_certificate: {
                    type: Image,
                    required: true
                }
            }
        },

        hsc_qualifications: {
            state: {
                type: String,
                required: true
            },
            name_of_board: {
                type: String,
                required: true
            },
            institute_name: {
                type: String,
                required: true
            },
            institute_address: {
                type: String,
                required: true
            },
            mode_of_clearance: {
                type: String,
                required: true
            },
            stream:{
                type: String,
                required: true
            },
            passing_year: {
                type: Date,
                required: true
            },
            passing_month: {
                type: Date,
                required: true
            },
            marks_obtained: {
                type: Number,
                required: true
            },
            total_marks: {
                type: Number,
                required: true
            },
            grade_obtained: {
                type: String,
                required: true
            },
            medium_of_education: {
                type: String,
                required: true
            },
            enrollment_number: {
                type: Number,
                required: true
            },
            documents: {
                passing_certificate: {
                    type: Image,
                    required: true
                },
                leaving_certificate: {
                    type:Image,
                    required: true
                },
                bonafide: {
                    type: Image,
                    required: true
                },
                provisional_certificate: {
                    type:Image,
                    required: true
                },
                migration_certificate: {
                    type: Image,
                    required: true
                }
            }
        },

        graduation_qualification: {
            state: {
                type: String,
                required: true
            },
            name_of_board: {
                type: String,
                required: true
            },
            institute_name: {
                type: String,
                required: true
            },
            institute_address: {
                type: String,
                required: true
            },
            mode_of_clearance: {
                type: String,
                required: true
            },
            stream: {
                type: String,
                required: true
            },
            passing_year: {
                type: Date,
                required: true
            },
            passing_month: {
                type: Date,
                required: true
            },
            marks_obtained: {
                type: Number,
                required: true
            },
            total_marks: {
                type: Number,
                required: true
            },
            grade_obtained: {
                type: String,
                required: true
            },
            medium_of_education: {
                type: String,
                required: true
            },
            enrollment_number: {
                type: Number,
                required: true
            },
            documents: {
                passing_certificate: {
                    type: Image,
                    required: true
                },
                leaving_certificate: {
                    type:Image,
                    required: true
                },
                bonafide: {
                    type: Image,
                    required: true
                },
                provisional_certificate: {
                    type:Image,
                    required: true
                },
                migration_certificate: {
                    type: Image,
                    required: true
                }
            }
        },

        post_graduation_qualification: {
            state: {
                type: String,
                required: true
            },
            name_of_board: {
                type: String,
                required: true
            },
            institute_name: {
                type: String,
                required: true
            },
            institute_address: {
                type: String,
                required: true
            },
            mode_of_clearance: {
                type: String,
                required: true
            },
            stream: {
                type: String,
                required: true
            },
            passing_year: {
                type: Date,
                required: true
            },
            passing_month: {
                type: Date,
                required: true
            },
            marks_obtained: {
                type: Number,
                required: true
            },
            total_marks: {
                type: Number,
                required: true
            },
            grade_obtained: {
                type: String,
                required: true
            },
            medium_of_education: {
                type: String,
                required: true
            },
            enrollment_number: {
                type: Number,
                required: true
            },
            documents: {
                passing_certificate: {
                    type: Image,
                    required: true
                },
                leaving_certificate: {
                    type:Image,
                    required: true
                },
                bonafide: {
                    type: Image,
                    required: true
                },
                provisional_certificate: {
                    type:Image,
                    required: true
                },
                migration_certificate: {
                    type: Image,
                    required: true
                }
            }
        },

        mphil_qualification: {
            state: {
                type: String,
                required: true
            },
            name_of_board: {
                type: String,
                required: true
            },
            institute_name: {
                type: String,
                required: true
            },
            institute_address: {
                type: String,
                required: true
            },
            mode_of_clearance: {
                type: String,
                required: true
            },
            stream: {
                type: String,
                required: true
            },
            passing_year: {
                type: Date,
                required: true
            },
            passing_month: {
                type: Date,
                required: true
            },
            marks_obtained: {
                type: Number,
                required: true
            },
            total_marks: {
                type: Number,
                required: true
            },
            grade_obtained: {
                type: String,
                required: true
            },
            medium_of_education: {
                type: String,
                required: true
            },
            enrollment_number: {
                type: Number,
                required: true
            },
            documents: {
                passing_certificate: {
                    type: Image,
                    required: true
                },
                leaving_certificate: {
                    type:Image,
                    required: true
                },
                bonafide: {
                    type: Image,
                    required: true
                },
                provisional_certificate: {
                    type:Image,
                    required: true
                },
                migration_certificate: {
                    type: Image,
                    required: true
                }
            }
        },

        hobbies: [String],

        other_personal_details: {
            category: {
                type: String,
                required: true
            },
            caste: {
                type: String,
                required: true
            },
            special_category: {
                type: String,
                required: true
            },
            is_physically_handicapped: {
                type: Boolean,
                required: true
            },
            other_documents: {
                photo: {
                    type: Image,
                    required: true
                },
                signature: {
                    type: Image,
                    required: true
                },
                address_details: {
                    type: Image,
                    required: true
                }
            }
        }



    }
})


// Email containing username & password to be sent to students whose name is in list uploaded by institute
// Login api with username and password sent in email by the institute
// JWT Authentication & token to be sent on successfull login
// Change Password (Optional)
// Profile details including student's personal, family, address, academic & interest/hobbies to be submitted for particular student_id
// For existing student details to be fetched with student_id/email_address

// 1. Fetching user details with Login api for student
// http://localhost:5000/api/student/login, body: {email_address: value, password: value}
// {
//     status: 200,
//     message: 'Logged In Successfully',
//     data: {
//         token: value
//     }
// }


// If email or password is incorrect
// {
//     status: 400,
//     message: 'Invalid Credentials'
// }

// token value on decoding, we can pass user_name, email_address, student_id or any other user details in it
//  token value: {
//     email_address: 'value',
//     user_name: 'value' or student_id: 'value'
// }

// 2. Fetching user/student profile details either with email_address or student_id and fetch only those fields whose flag is set to true in student control panel
// email_address: 'rohankanwar01@gamil.com';
// student_id: 'id'

// http://localhost:5000/api/student/getProfileDetails, body: (email_address) (If with email address)
// http://localhost:5000/api/student/getProfileDetails/student_id, params: student_id (If with student id)


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

// If wrong email address or student id is passed
// {
//     status: 400,
//     message: 'No such student present'
// }

// 3. Show/hide particular fields to be controlled in student control panel, can be a checkbox for fields which are to be shown 
// and submit button for sending the respective details to api which will set flag for particular values/fields
// http://localhost:5000/api/student_panel/toggleFields, body: {hobbies: false, personal_details: {father_name: true}}
// {
//     status: 200,
//     message: 'Flag values set'
// }


// 4. Student can create a profile

// http://localhost:5000/api/student/createProfile, body: {email_address: '', personal_details: {last_name: 'value'}, academic_details: {name: 'value'}}

// {
//     status: 200,
//     message: 'created profile successfully'
// }

// 5. Student can edit profile details

// http://localhost:5000/api/student/editProfile/student_id, body: {email_address: '', personal_details: {first_name: "new value"}, family_details: {father_age: "new_value"}}


// {
//     status: 200,
//     message: 'student details edited successfully',
//     data: {}
// }

// If wrong email address or student id is passed
// {
//     status: 400,
//     message: 'No such student present'
// }


// Notifications, Attendance, Reports, Payments, Assignments, Communication, Exam Module
// 6. Notifications - Notifications regarding assignments(new assignment, submission & report), student should be notified,
                // Notification regarding reports
                // Notifications regarding succesfull or failed payments
                // Notifications regarding exam module

// 7. Attendance - Post student attendance 
// http://localhost:5000/api/student/markAttendance, body: {email_address: 'value'}
// {
    // status: 200,
    // message: 'marked attendance successfully',
    // }

// If wrong email address or student id is passed
// {
//     status: 400,
//     message: 'No such student present'
// }

// 8. Reports - get reports of a student
// http://localhost:5000/api/student/getReports/student_id, body: {email_address} or params: student_id

// {
    // status: 200,
    // message: 'fetched reports successfully',
    // }

// If wrong email address or student id is passed
// {
//     status: 400,
//     message: 'No such student present'
// }

// 8. Assignments - get all assignments posted or submit assignment
// http://localhost:5000/api/student/getAssignments/student_id, body: {email_address} or params: student_id
// http://localhost:5000/api/student/submitASsignment, body: {email_address, file: value}


// 9. Payments - payment for courses
// 10. Communication - 

// 11. Exam Module - view exam module
// http://localhost:5000/api/student/getExamModule/student_id, body: {email_address} or params: student_id
// {
    // status: 200,
    // message: 'fetched exam module successfully',
    // }

// If wrong email address or student id is passed
// {
//     status: 400,
//     message: 'No such student present'
// }
