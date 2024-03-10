import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function User() {
    const [userData, setUserData] = useState([]);
    const [newUserData, setNewUserData] = useState({
        name: '',
        email: '',
        skills: '',
        role: '',
        experience: '',
    });
    const [editUserData, setEditUserData] = useState({
        name: '',
        email: '',
        skills: '',
        role: '',
        experience: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewUserData({ ...newUserData, [name]: value });
        setEditUserData({ ...editUserData, [name]: value });
    };

    {/* CREATE operation */}
    
    const addNewUser = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/users', newUserData);
            console.log('Data stored successfully:', response.data);
            setUserData([...userData, response.data]);
            setNewUserData({
                name: '',
                email: '',
                skills: '',
                role: '',
                experience: '',
            });
            document.getElementById('add_user_modal_close').click();
            window.alert('Data saved successfully!');
        } catch (error) {
            console.error('Error storing data:', error);
            window.alert('Error storing data:', error);
        }
    };

    {/* READ / FETCH operation */}
    
    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/users');
            setUserData(response.data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    {/* UPDATE operation */}
    
    const updateUser = async (userId, updatedUserData) => {
        try {
            const update_confirmation = window.confirm("Are you sure to update the values ?")
            if (update_confirmation){
                await axios.put(`http://localhost:3001/users/${userId}`, updatedUserData);
                document.getElementById('update_user_modal_close').click();
            }
            
            
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    const handleEdit = (user) => {
        setEditUserData(user);
    };

    const handleUpdateUser = (e, updatedUserData) => {
        e.preventDefault();
        updateUser(updatedUserData.id, updatedUserData);
    };

    {/* DELETE operation */}
    
    const deleteUser = async (userId) => {
        try {
            const delete_confirmation = window.confirm("Are you sure to delete the user ?");
            if (delete_confirmation) {
                await axios.delete(`http://localhost:3001/users/${userId}`);
                setUserData(userData.filter(user => user.id !== userId));
            }
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <div className=' mt-5 container'>
            <button className='btn btn-success mt-5 text-left' data-bs-toggle="modal" data-bs-target="#add_user_modal">Add new user</button>
            <div className='table-responsive text-center'>
                <table className='mt-5 table table-bordered table-hover align-middle table-sm'>
                    <thead className='table-warning'>
                        <tr>
                            <th scope='col'>Name</th>
                            <th scope='col'>Email</th>
                            <th scope='col'>Skills</th>
                            <th scope='col'>Role</th>
                            <th scope='col'>Experience</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map(user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.skills}</td>
                                <td>{user.role}</td>
                                <td>{user.experience}</td>
                                <td>
                                    <button className='btn btn-warning m-1' data-bs-toggle="modal" data-bs-target="#update_user_modal" onClick={() => handleEdit(user)}>Edit</button>
                                    <button className='btn btn-danger m-1' onClick={() => deleteUser(user.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Add new User Modal */}

            <div className="modal" id="add_user_modal" tabIndex="-1">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New User</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" ></button>
              </div>
              <form onSubmit={addNewUser}>
                <div className="modal-body"> 
                  <div className="row mb-3">
                    <label htmlFor="add_user_name_field" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                      <input required type="text" className="form-control" id="add_user_name_field"  placeholder="Enter the user's name" onChange={handleChange} value={newUserData.name} name="name"/>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label htmlFor="add_user_email_field" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                      <input required type="email" className="form-control" id="add_user_email_field"  placeholder="Enter the user's email" onChange={handleChange} value={newUserData.email} name="email"/>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label htmlFor="add_user_skills_field" className="col-sm-2 col-form-label">Skills</label>
                    <div className="col-sm-10">
                      <input required type="text" className="form-control" id="add_user_skills_field"  placeholder="Enter the user's skills" onChange={handleChange} value={newUserData.skills} name="skills"/>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label htmlFor="add_user_role_field" className="col-sm-2 col-form-label">Role</label>
                    <div className="col-sm-10">
                      <input required type="text" className="form-control" id="add_user_role_field"  placeholder="Enter the user's role" onChange={handleChange} value={newUserData.role} name="role"/>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label htmlFor="add_user_experience_field" className="col-sm-2 col-form-label">Experience</label>
                    <div className="col-sm-10">
                      <select required className="form-select htmlForm-select-md mb-3" id="add_user_experience_field" onChange={handleChange} value={newUserData.experience} name="experience">
                        <option defaultValue>Select user's experience </option>
                        <option value="0 Years">Fresher</option>
                        <option value="1-3 Years">1 to 3 Years</option>
                        <option value="3-5 Years">3 to 5 Years</option>
                        <option value="5-7 Years">5 to 7 Years</option>
                        <option value="7+ Years">7 + Years</option>
                      </select>
                    </div>
                  </div>              
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-danger" data-bs-dismiss="modal" id="add_user_modal_close">Close</button>
                  <button type="submit" className="btn btn-success" >Add user</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
            {/* Update User Modal */}

            <div className="modal" id="update_user_modal" tabIndex="-1">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit User</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <form onSubmit={(e) => handleUpdateUser(e, editUserData)}>
                                <div className="modal-body">
                                    <div className="row mb-3">
                                        <label htmlFor="edit_user_name_field" className="col-sm-2 col-form-label">Name</label>
                                        <div className="col-sm-10">
                                            <input required type="text" className="form-control" id="edit_user_name_field" placeholder="Enter the user's name" onChange={handleChange} value={editUserData.name} name="name" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="edit_user_email_field" className="col-sm-2 col-form-label">Email</label>
                                        <div className="col-sm-10">
                                            <input required type="email" className="form-control" id="edit_user_email_field" placeholder="Enter the user's email" onChange={handleChange} value={editUserData.email} name="email" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="edit_user_skills_field" className="col-sm-2 col-form-label">Skills</label>
                                        <div className="col-sm-10">
                                            <input required type="text" className="form-control" id="edit_user_skills_field" placeholder="Enter the user's skills" onChange={handleChange} value={editUserData.skills} name="skills" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="edit_user_role_field" className="col-sm-2 col-form-label">Role</label>
                                        <div className="col-sm-10">
                                            <input required type="text" className="form-control" id="edit_user_role_field" placeholder="Enter the user's role" onChange={handleChange} value={editUserData.role} name="role" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="edit_user_experience_field" className="col-sm-2 col-form-label">Experience</label>
                                        <div className="col-sm-10">
                                            <select required className="form-select htmlForm-select-md mb-3" id="edit_user_experience_field" onChange={handleChange} value={editUserData.experience} name="experience">
                                                <option defaultValue>{editUserData.experience} </option>
                                                <option value="0 Years">Fresher</option>
                                                <option value="1-3 Years">1 to 3 Years</option>
                                                <option value="3-5 Years">3 to 5 Years</option>
                                                <option value="5-7 Years">5 to 7 Years</option>
                                                <option value="7+ Years">7 + Years</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal" id="update_user_modal_close">Close</button>
                                    <button type="submit" className="btn btn-success">Update user</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </div>
    )
}
    