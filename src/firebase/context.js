import React, { useContext } from 'react' 
const FirebaseContext = React.createContext(null)

const useFirebase = () => {
    return useContext(FirebaseContext);
}
 
export default FirebaseContext
export { useFirebase }