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

//List of API's
//Login - Login with username and password sent in the link by the institute
//Link Generation
//Link sent to registered applicant
//JWT Authentication for login
//Profile details for particular student/student id- Personal details, Address details, Family details, Academic details, Hobbies & Interest, Other Personal details
