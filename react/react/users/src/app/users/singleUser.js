
const SingleUser = (props) => {
    const userPhoto = props.data.picture.thumbnail;
    const userName = props.data.name.first;
    const userEmail = props.data.email;
    const userDateOfBirth = props.data.dob;

    const formatDate = (date) => {
        const newDate = new Date(date)
        const day = newDate.getDate();
        const month = newDate.getMonth() + 1;
        const year = newDate.getFullYear();
        const formatedDate = `${day}.${month}.${year}.`
        return formatedDate
    }


    // return <
}

export default SingleUser