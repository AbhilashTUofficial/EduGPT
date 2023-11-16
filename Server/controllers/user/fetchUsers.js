const fetchUsers = async (req, res) => {
    try {
        const studentRef = db.collection('students');
        const studentGet = await studentRef.get();
        const students = [];
        studentGet.forEach(doc => {
            students.push(doc.data());
        });
        res.json({ students });
    } catch (error) {
        console.log(error);
    }
}
export default fetchUsers;