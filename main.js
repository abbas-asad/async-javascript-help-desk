// const func1 = (callback) => {
//     console.log("function one invoked")
//     callback()
// }

// func1(() => console.log("function two invoked"))

// console.log("First")

// setTimeout(() => {
//     console.log("Second")
// }, 3000)

// console.log("third")

// Example 1 by callback (Real World example)
// const loginUser = (email, password, cb) => {
//     setTimeout(() => {
//         cb(email)
//     }, 2000)
// }

// const getVideos= (email,callback)=>{
//     setTimeout(()=>{
//         callback(["video1","video2","video3"])

//     },3000)
// }

// loginUser("abbas@abc.com", 1234, (em) => {
//     console.log(em)
//     getVideos(em,(videos)=>{
//         console.log(videos)

//     })
// })

// Example 1 by promises
// Making promise to do by either then,catch or async,await

// We are making promise then to use it as an object like .then and .catch
const loginUserPromise = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "abbas@abc.com" && password === 1234) {
        resolve(email);
      } else {
        reject("Invalid Email or password");
      }
    }, 2000);
  });
};

const getVideosPromise = (email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email) {
        resolve(["video1", "video2", "video3"]);
      } else {
        reject("Please provide your email");
      }
    }, 3000);
  });
};

// by then and catch (by promises)

// loginUserPromise("abbas@abc.com", 1234)
//     .then((email) => {
//         console.log(email)
//         return getVideosPromise("abbas@abc.com")
//     })
//     .then((videos) => {
//         console.log(videos)
//     })
//     .catch((err) => {
//         console.log(err)
//     })
//  When using .then and .catch with Promises in Javascript, use only one .catch at the end to handle any errors from the earlier .then blocks. This keeps your code simple and error handling centralized.

// by async and await (More easy method by promises)

// const getUserDetails = async () => {
//     try {
//         const email = await loginUserPromise("abbas@abc.com", 1234)
//         console.log(email)
//         const videos = await getVideosPromise(email)
//         console.log(videos)
//     }
//     catch (err) {
//         console.log(err)
//     }
// }

// getUserDetails()

// console.log("It will print first")

// Example 2  (Only promises)
//Making promise to do by either then,catch or async,await
const checkMyResult = (myMarks) => {
  const promise = new Promise((resolve, reject) => {
    if (myMarks > 80) {
      resolve("Promise successful");
    } else {
      reject("fail");
    }
  });
  return promise;
};

// by then and catch (by promises)
// checkMyResult(88)
//     .then((message) => {
//     console.log(message)
//     return "treat"           // What is returned here will be printed in the next then

// })
// .then((msg) => {
//     console.log(msg)
// })
// .catch((err) => {
//     console.log(err)
// })

// by async and await
// const displayMarksResult = async () => {
//   try {
//     const marksResult = await checkMyResult(50);
//     console.log(marksResult);
//   } catch (error) {
//     console.log(error);
//   }
// };

// displayMarksResult();
// console.log("It will print first");


// Example 3 (Hospital records)

// Another real-world example of hospital records by promises (async/await) .
// Function to clear the console screen
const clearScreen = () => {
  console.clear();
};

// Function to register a patient
const register = (name, email, phoneNumber, country, setPassword) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Check if the provided details are valid
      if (
        name &&
        email.includes('@gmail.com') &&
        phoneNumber.startsWith('+92') &&
        phoneNumber.length === 13 &&
        country &&
        setPassword.length >= 8
      ) {
        resolve('Patient registered successfully');
      } else {
        reject('Registration failed. Please check details.');
      }
    }, 1000);
  });
};

// Function to login a patient
const logIn = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Check if email and password are provided
      if ((email, password)) {
        resolve('Patient logged in successfully');
      } else {
        reject("Invalid email or password");
      }
    }, 1000);
  });
};

// Function to get patient medical records
const getRecords = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const records = ['Record 1', 'Record 2', 'Record 3'];
      if (records.length > 0) {
        resolve(records);
      } else {
        reject('Medical records not found');
      }
    }, 1000);
  });
};

// Main function to simulate hospital operations

// const details = async () => {
//   try {
//     // Simulate loading
//     console.log('Loading...');
//     await new Promise(resolve => setTimeout(resolve, 2000)); // Delay for loading message
//     clearScreen();

//     // Register the patient
//     const regDetails = await register(
//       'Abbas',
//       'abbas07tech@gmail.com',
//       '+923112540080',
//       'Pakistan',
//       '7ry5e/g9j'
//     );
//     console.log(regDetails);
//     await new Promise(resolve => setTimeout(resolve, 2000));

//     clearScreen();
//     console.log('Loading...');
//     await new Promise(resolve => setTimeout(resolve, 2000)); // Delay for loading message

//     clearScreen();

//     // Log in the patient
//     const logDetails = await logIn('abbas07tech@gmail.com', '7ry5e/g9j');
//     console.log(logDetails);

//     // Get patient medical records
//     const recordDetails = await getRecords();
//     console.log('Medical Records: ');
//     for (let i = 0; i < recordDetails.length; i++) {
//       setTimeout(() => {
//         console.log(recordDetails[i]);
//       }, i * 1000); // 1 second delay for each record
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// details();




