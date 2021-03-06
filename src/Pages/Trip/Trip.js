import { useHistory } from 'react-router';
import './Trip.css'


const Trip = (props) => {
    const [control, setControl] = props.setControl
    const { title, description, img } = props.trip.trip;
    const history = useHistory()

    // pending status update 
    const handleUpdate = id => {
        fetch(`https://nameless-coast-33229.herokuapp.com/trip/${id}`, {
            method: "PUT",
            headers: { "content-type": "application.json" }
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount) {
                    alert("Booking approved successfully")
                    setControl(!control)
                    history.push('/mytrip')
                }
                else {
                    setControl(false)
                }
            })
    }

    // trip canceletion 
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure want to cancel this trip ? ')
        if (proceed) {
            fetch(`https://nameless-coast-33229.herokuapp.com/trip/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount) {
                        alert('Deleted Successfully')
                        setControl(!control)
                    }
                    else {
                        setControl(false)
                    }
                })
        }


    }



    return (
        <div class="bg-white rounded-lg shadow-xl lg:flex lg:max-w-lg lg:m-10 m-5">
            <img src={img}
                alt='' class="w-1/1 lg:w-1/2 rounded-l-2xl" />
            <div class="p-6">
                <h2 class="mb-2 text-2xl font-bold text-gray-900">{title}</h2>
                <small className='font-bold felx items-center mr-2'> <i class="far fa-calendar-alt  mr-2"></i>{props.trip.date}</small>
                <p class="text-gray-600 text-sm">{description}</p>
                <div className='flex justify-between mt-4'>

                    <button onClick={() => handleUpdate(props.trip._id)} className={props.trip.status === "Approved" ? 'approved ' : 'pending'}>{props.trip.status}</button>
                    <button onClick={() => handleDelete(props.trip._id)} className='cancel-button hover:bg-red-600 hover:text-white'>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default Trip;