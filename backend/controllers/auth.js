import {db} from '../db.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

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

export const login = (req, res) => {
    // Validate existing user
    const query = "SELECT * FROM users WHERE username = ?"

    db.query(query, [req.body.username], (err, data) => {
        if(err) return res.json(err);
        if(data.length ===0) return res.status(404).json("User not found!");

        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);

        if(!isPasswordCorrect) return res.status(401).json("Username or password is wrong!");

        const token = jwt.sign({id : data[0].id}, "jwttoken");
        const { password, ...other } = data[0];

        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).json(other);

    })
}

// export const logout = (req, res) => {
    
// }
