import React from 'react';

const UserProfile = ({ userProfile, logoutProfile }) => {
  return (
    <div>
      <section className="text-gray-600 body-font min-h-screen">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            {userProfile !== 0 && (
              <div>
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{userProfile.username}</h1>
                <p className="sm:text-2xl text-1xl mb-4 font-small text-gray-900">Email - {userProfile.email}</p>
                <p className="sm:text-2xl text-1xl mb-4 font-small text-gray-900">Address - {userProfile.address}</p>
                <p className="sm:text-2xl text-1xl mb-4 font-small text-gray-900">Phone - {userProfile.contact}</p>
                <p className="sm:text-2xl text-1xl mb-4 font-small text-gray-900">USERID - {userProfile.id}</p>
                <p className="sm:text-2xl text-1xl mb-4 font-small text-gray-900">User Type - {userProfile.usertype}</p>
              </div>
            )}
            <p className="text-sm text-gray-500 mb-8 w-full">Please proceed to the Products Page</p>
            <div className="flex lg:flex-row md:flex-col ">
              <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
                <img className="w-6" src="https://img.icons8.com/fluency/344/portfolio.png" alt="Update Profile" />
                <span className="ml-4 flex items-start flex-col leading-none">
                  <span className="title-font font-medium">Update Profile</span>
                </span>
              </button>

              <button
                onClick={logoutProfile}
                className="ml-[15px] bg-lime-400 inline-flex py-3 px-5 rounded-lg items-center md:mt-4 mt-0 lg:mt-0 hover:bg-red-500 hover:text-black focus:outline-none"
              >
                <img
                  className="w-6"
                  src="https://img.icons8.com/external-febrian-hidayat-outline-color-febrian-hidayat/344/external-logout-user-interface-febrian-hidayat-outline-color-febrian-hidayat.png"
                  alt="Logout"
                />
                <span className="ml-4 flex items-start flex-col leading-none">
                  <span className="title-font font-medium">Logout</span>
                </span>
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://i.pinimg.com/originals/49/3f/a0/493fa0f13970ab3ef29375669f670451.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserProfile;
