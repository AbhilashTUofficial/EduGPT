const setName = async(req, res) => {
    try {
        const studentRef = db.collection('students').doc(req.body.uid);
        const studentGet = await studentRef.get();
        const studentData = studentGet.data();
        if(studentData){
            await studentRef.update({
                name: req.body.name,
                type: req.body.type
            })
            res.json({message: "User name updated"})
        }
    } catch (error) {
        console.log(error)
    }
}

export default setName