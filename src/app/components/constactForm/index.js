'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

// ******* Local Imports *******
import { Loading } from '../common/loading';
import { InputComp } from '../common/inputComp';

const ContactForm = ({color, page}) => {

  const [loading, setLoading] = useState(false);

  const formValues = {
    name: '',
    email: '',
    subject: '',
    details: '',
  }
  const [state, setState] = useState(formValues);


  const handleChange = (event) => {
    const { value, name } = event.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const { name, email, subject, details } = state;
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/quote`,
        state
      );
      if (response.status === 200) {
        setState(formValues);
        setLoading(false);
        toast.success("Your data submitted successfully");
      } else {
        toast.error("Something bad has happened, please try again");
        setLoading(false);
      }
    } catch (error) {
      toast.error("Something bad has happened, please try again");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=''>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4'>
          <InputComp
            color={color}
            inputType="text"
            labelName="Full Name"
            inputName="name"
            handleChange={handleChange}
            valueName={name}
            placeholder="eg: John Smith"
            page={page}
          />
          <InputComp
            color={color}
            inputType="email"
            labelName="Email"
            inputName="email"
            handleChange={handleChange}
            valueName={email}
            placeholder="eg: John Smith@gmail.com"
            page={page}
          />
        </div>
        <div className='pb-4'>
          <InputComp
            color={color}
            inputType="text"
            labelName="Subject"
            inputName="subject"
            handleChange={handleChange}
            valueName={subject}
            placeholder="eg: Web product"
            subject = 'true'
          />
        </div>
        <label className="block">
          <span className={`block font-normal text-[16px] text-light text-${color === 'white' ? 'white' : 'black300'}`}>Message</span>
          <textarea
            rows="7"
            name="details"
            type="textarea"
            value={details}
            onChange={handleChange}
            required
            placeholder="How can we help you?"
            className="mt-1 form-control w-full block px-3 py-2 bg-white border border-inputBorder
            rounded-sm font-light text-[#5B5675] text-sm shadow-sm placeholder-[#C9C9C9]
            focus:outline-none focus:border-mustered600 focus:ring-1 focus:ring-mustered600"
          />
        </label>
        <div className='flex justify-center md:justify-start  ml-[2px]'>
          <button
            type="submit"
            className={`mt-12 px-[26px] text-[18px] h-[53px] w-[187px] font-black  border-2  float-left uppercase btn bg-transparent rounded-none
             ${page == 'contact' ? 'hover:text-white hover:bg-blue600 hover:border-blue600 bg-blue500 text-blue600 border-blue600' : ' hover:bg-mustered600 hover:border-blue600 bg-blue500 text-white border-white' }`}
          >
            <div className="flex justify-center items-center">
              <span>SEND</span>
              {loading && <Loading />}
            </div>
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm