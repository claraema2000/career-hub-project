import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/localStorage";

const JonDetails = () => {

    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    // console.log(job);

    const handleApplyBtn = () => {
        saveJobApplication(idInt);
        toast.success("Applied successfully");
    }

    return (
        <div>
            <div className="h-48 bg-no-repeat text-center" style={{ backgroundImage: 'url(https://i.ibb.co/FVJL1js/bg1.png)' }}>
                <h2 className="text-4xl font-bold text-indigo-600 my-16">Job Details</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-5 my-12">
                <div className="md:col-span-3 space-y-7">
                    <p className="text-gray-600"><span className="text-gray-900 font-bold">Job Description: </span>{job.job_description}</p>
                    <p className="text-gray-600"><span className="text-gray-900 font-bold">Job Responsibility: </span>{job.job_responsibility}</p>
                    <p className="text-gray-600"><span className="text-gray-900 font-bold">Educational Requirements: </span>{job.educational_requirements}</p>
                    <p className="text-gray-600"><span className="text-gray-900 font-bold">Experiences: </span>{job.experiences}</p>

                </div>
                <div className="">
                    <div className="bg-indigo-100 rounded-md p-8">
                        <div>
                            <div>
                                <h4 className="font-bold text-lg">Job Details</h4>
                                <hr />
                            </div>
                            <div>
                                <h4 className="font-bold text-l">Contact Information</h4>
                                <hr />
                            </div>

                        </div>
                    </div>
                    <button onClick={handleApplyBtn} className="btn w-full mt-3 text-lg text-white font-bold bg-gradient-to-r from-cyan-300 from-5% to-indigo-400 to-40%">Apply Now</button>
                    <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                </div>
            </div>
        </div>

    );
};

export default JonDetails;