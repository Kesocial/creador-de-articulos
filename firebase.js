import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDZzTPkNUGMm7y7I2paXG2SMdxfPar-RHg",
  authDomain: "articlescreator-8694c.firebaseapp.com",
  projectId: "articlescreator-8694c",
  storageBucket: "articlescreator-8694c.appspot.com",
  messagingSenderId: "491653683760",
  appId: "1:491653683760:web:bdc026c01ea0f8d37cabf5",
  measurementId: "G-JEPQ321G18",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
