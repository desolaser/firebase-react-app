import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

 
const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
}
 
class Firebase {
    constructor() {
        app.initializeApp(config)        
        this.db = app.database()
        this.auth = app.auth()
    }
    
    // *** Auth API ***
    
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password)
         
    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password)

    doSignOut = () => this.auth.signOut()

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email)

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password)

    confirmPasswordReset = (code, password) =>
        this.auth.confirmPasswordReset(code, password)
    
    // *** User API ***
 
    user = uid => this.db.ref(`users/${uid}`)

    users = () => this.db.ref('users')
    
    // *** Budgets API ***

    budget = bid => this.db.ref(`budgets/${bid}`)

    budgets = () => this.db.ref('budgets')
        
    // *** Products API ***
 
    product = pid => this.db.ref(`products/${pid}`)

    products = () => this.db.ref('products')
}

export default Firebase