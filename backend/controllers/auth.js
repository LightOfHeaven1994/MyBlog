import {db} from '../db.js'
import bcrypt from 'bcryptjs'

export const register = (req, res) => {

    // Validate existing user
    const query = "SELECT * FROM users WHERE email = ? OR username = ?"

    db.query(query, [req.body.email, req.body.username], (err, data) => {
        if(err) return res.json(err);
        if(data.length) return res.status(409).json("User already exists!")

        // Hash the password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt)

        const query = "INSERT INTO users (`email`, `password`, `username`) VALUES (?)"
        const values = [req.body.email, hash, req.body.username]

        db.query(query, [values], (err, data) => {
            if(err) return res.json(err)
            else return res.status(201).json("Your account has been created successfully!")
        })
    })
}

// export const login = (req, res) => {
    
// }

// export const logout = (req, res) => {
    
// }
