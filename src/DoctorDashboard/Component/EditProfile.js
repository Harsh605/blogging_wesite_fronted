import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

function EditProfile() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("");
  const [designation, setDesignation] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [photo, setPhoto] = useState("");
  const [mail, setMail] = useState("");
  const [facebook, setFacebook] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [instagram, setInstagram] = useState("");
  const [twitter, setTwitter] = useState("");
  const [discord, setDiscord] = useState("");
  const [reddit, setReddit] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {});

  const handleBack = () => {
    navigate("/doctor/profile");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submit logic or API call here
  };

  return (
    <>
      <div className="px-0 py-0 ">
        <div className="flex flex-no-wrap items-start">
          <div className="w-full ">
            <div className="py-4 px-2">
              <div className="bg-white rounded shadow py-7">
                <div className="mt-10 px-7">
                  <p className="text-xl font-semibold leading-tight text-gray-800">
                    Update Your Profile
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className="grid w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-7 mt-7 ">
                      <div>
                        <p className="text-base font-medium leading-none text-gray-800">
                          Name
                        </p>
                        <input
                          className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <p className="mt-3 text-xs leading-3 text-gray-600">
                          Update Your Name
                        </p>
                      </div>
                      <div>
                        <p className="text-base font-medium leading-none text-gray-800">
                          Email
                        </p>
                        <input
                          type="email"
                          className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <p className="mt-3 text-xs leading-[15px] text-gray-600">
                          Update Your Email
                        </p>
                      </div>
                      <div>
                        <p className="text-base font-medium leading-none text-gray-800">
                          Phone No
                        </p>
                        <input
                          type="tel"
                          className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                        <p className="mt-3 text-xs leading-[15px] text-gray-600">
                          Update Your Phone No
                        </p>
                      </div>
                      <div>
                        <p className="text-base font-medium leading-none text-gray-800">
                          Birth Date
                        </p>
                        <input
                          type="date"
                          className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                          value={birthdate}
                          onChange={(e) => setBirthdate(e.target.value)}
                        />
                        <p className="mt-3 text-xs leading-[15px] text-gray-600">
                          Update Your Birth Date
                        </p>
                      </div>
                      <div>
                        <p className="text-base font-medium leading-none text-gray-800">
                          Gender
                        </p>
                        <input
                          className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                        />
                        <p className="mt-3 text-xs leading-[15px] text-gray-600">
                          Your Gender
                        </p>
                      </div>
                      <div>
                        <p className="text-base font-medium leading-none text-gray-800">
                          Designation
                        </p>
                        <input
                          type="text"
                          className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                          value={designation}
                          onChange={(e) => setDesignation(e.target.value)}
                        />
                        <p className="mt-3 text-xs leading-[15px] text-gray-600">
                          Update Your Designation
                        </p>
                      </div>
                      <div>
                        <p className="text-base font-medium leading-none text-gray-800">
                          City
                        </p>
                        <input
                          className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                        />
                        <p className="mt-3 text-xs leading-[15px] text-gray-600">
                          Update Your City
                        </p>
                      </div>
                      <div>
                        <p className="text-base font-medium leading-none text-gray-800">
                          State/Province
                        </p>
                        <input
                          className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                        />
                        <p className="mt-3 text-xs leading-[15px] text-gray-600">
                          Update your State/Province
                        </p>
                      </div>
                      <div>
                        <p className="text-base font-medium leading-none text-gray-800">
                          Country
                        </p>
                        <input
                          className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                        />
                        <p className="mt-3 text-xs leading-[15px] text-gray-600">
                          Update Your Country
                        </p>
                      </div>
                      <div>
                        <p className="text-base font-medium leading-none text-gray-800">
                          Your Photo
                        </p>
                        <input
                          accept="image/*"
                          type="file"
                          className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                          value={photo}
                          onChange={(e) => setPhoto(e.target.value)}
                        />
                        <p className="mt-3 text-xs leading-[15px] text-gray-600">
                          Set Your Photo
                        </p>
                      </div>
                    </div>
                    <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 ">
                      <div>
                        <p className="text-base font-medium leading-none text-gray-800">
                          Mail
                        </p>
                        <input
                          className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                          value={mail}
                          onChange={(e) => setMail(e.target.value)}
                        />
                        <p className="mt-3 text-xs leading-[15px] text-gray-600">
                          Set Your Mail (mailto:contact@buff.com)
                        </p>
                      </div>
                      <div>
                        <p className="text-base font-medium leading-none text-gray-800">
                          Facebook
                        </p>
                        <input
                          className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                          value={facebook}
                          onChange={(e) => setFacebook(e.target.value)}
                        />
                        <p className="mt-3 text-xs leading-[15px] text-gray-600">
                          Set Your Facebook Id
                          (https://www.facebook.com/profile.php?id=1000934)
                        </p>
                      </div>
                      <div>
                        <p className="text-base font-medium leading-none text-gray-800">
                          Linkedin
                        </p>
                        <input
                          className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                          value={linkedin}
                          onChange={(e) => setLinkedin(e.target.value)}
                        />
                        <p className="mt-3 text-xs leading-[15px] text-gray-600">
                          Set Your Linkedin
                          (https://www.linkedin.com/in/buff-1bb027a)
                        </p>
                      </div>
                      <div>
                        <p className="text-base font-medium leading-none text-gray-800">
                          Instagram
                        </p>
                        <input
                          className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                          value={instagram}
                          onChange={(e) => setInstagram(e.target.value)}
                        />
                        <p className="mt-3 text-xs leading-[15px] text-gray-600">
                          Set Your Instagram
                          (https://www.instagram.com/buff.g/)
                        </p>
                      </div>
                      <div>
                        <p className="text-base font-medium leading-none text-gray-800">
                          Twitter
                        </p>
                        <input
                          className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                          value={twitter}
                          onChange={(e) => setTwitter(e.target.value)}
                        />
                        <p className="mt-3 text-xs leading-[15px] text-gray-600">
                          Set Your Twitter (https://twitter.com/findout)
                        </p>
                      </div>
                      <div>
                        <p className="text-base font-medium leading-none text-gray-800">
                          Discord
                        </p>
                        <input
                          className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                          value={discord}
                          onChange={(e) => setDiscord(e.target.value)}
                        />
                        <p className="mt-3 text-xs leading-[15px] text-gray-600">
                          Set Your Discord (http://discordapp.com/users/111842223)
                        </p>
                      </div>
                      <div>
                        <p className="text-base font-medium leading-none text-gray-800">
                          Reddit
                        </p>
                        <input
                          className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                          value={reddit}
                          onChange={(e) => setReddit(e.target.value)}
                        />
                        <p className="mt-3 text-xs leading-[15px] text-gray-600">
                          Set Your Reddit (https://www.reddit.com/user/Buff_G/)
                        </p>
                      </div>
                    </div>
                    <div className="pt-6 border-gray-300 mt-2 px-2">
                      <p className="text-base font-semibold leading-4 text-gray-800">
                        Description
                      </p>
                      <div className="mt-10 border border-gray-300 rounded">
                        <textarea
                          className="resize-none w-full h-[170px] px-4 py-4 text-base outline-none text-slate-600"
                          placeholder="Start typing here ..."
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </div>
                    </div>
                    <p className="mt-3 text-xs leading-[15px] text-gray-600 px-7">
                      Type Your Brief Description for Users (Max-length: 100 words)
                    </p>
                    <hr className="h-[1px] bg-gray-100 my-14" />
                    <div className="flex flex-col flex-wrap items-center justify-center w-full px-7 lg:flex-row lg:justify-end md:justify-end gap-x-4 gap-y-4">
                      <button
                        onClick={handleBack}
                        className="bg-white border-[#452a72] rounded hover:bg-[#452a72] transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-[#452a72] hover:text-white border lg:max-w-[95px]  w-full "
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="bg-[#452a72] rounded hover:bg-transparent border border-[#452a72] transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white hover:text-[#452a72] lg:max-w-[144px] w-full "
                      >
                        Create
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
