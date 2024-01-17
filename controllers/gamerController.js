const pool = require("../database/connection")

exports.getAllGamers = async (req, res) => {
    try {
        const [rows, fields] = await pool.query("select * from GamersTable order by (gamerScore) desc");
        console.log(rows);
        res.status(200).json({data : rows, message : "Route is working correctly gg"});
    } catch (error) {
        console.log(error);
    }
    
}

exports.getThisWeekLeaderBoard = async (req, res) => {
    try {
        const [rows, fields] = await pool.query("select * from GamersTable where datediff(current_date(), timeStamp) between 0 and 6 order by (gamerScore) desc limit 200");
        if (rows && rows.length > 0)
            res.status(200).json({data : rows, message : "ThisWeekLeaderBoard Route is working correctly"});
        else
            res.status(404).json({message: "not enough people to calculate"});
    } catch (error) {
        console.log(error);
    }
}

exports.getLastWeekLeaderBoard = async (req, res) => {
    try {
        const [rows, fields] = await pool.query("select * from GamersTable where datediff(current_date(), timeStamp) between 7 and 13 order by (gamerScore) desc limit 200");
        if (rows && rows.length > 0)
            res.status(200).json({data : rows, message : "LastWeekLeaderBoard Route is working correctly"});
        else
            res.status(404).json({message: "not enough people to calculate"});
    } catch (error) {
        console.log(error);
    }
}

exports.getGamerRank = async(req, res) => {
    try {
        const {id} = req.params;
        const [rows, fields] = await pool.query("select * from GamersTable order By (gamerScore) desc");
        if (rows && rows.length > 0) {
            let result  = {"rank" : 0};
            for (let i = 0 ; i < rows.length; i++) {
                result.rank++;
                if(rows[i].gamerID == id) {
                    res.status(200).json({data : result, message: "Rank found successfully"});
                }
            }
        } else {
            res.status(404).json({message : "User Not Found"});
        }
    } catch (error) {
        console.log(error);
    }
}