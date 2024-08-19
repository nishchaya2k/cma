import React, { useEffect, useState } from "react";
import { IoReturnDownBackOutline } from "react-icons/io5";
import Input from "./Input";
import { useDispatch } from "react-redux";
import { addContact, updateContact } from "../store/ContactSlice";
import { useNavigate } from "react-router";

interface FormProps {
  setShowForm: (show: boolean) => void;
  editContact: any;
  isEditing: boolean;
}

const Form = ({ setShowForm, editContact, isEditing }: FormProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState<string>(
    editContact?.firstName || ""
  );
  const [lastName, setLastName] = useState<string>(editContact?.lastName || "");

  const [status, setStatus] = useState<string>(
    editContact?.status || "Inactive"
  );

  useEffect(() => {
    // Reset form values if editContact changes
    if (editContact) {
      setFirstName(editContact.firstName);
      setLastName(editContact.lastName);
      setStatus(editContact.status);
    }
  }, [editContact]);

  const handleRadioChange = (value: string) => () => {
    setStatus(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const contactData = {
      id: editContact ? editContact.id : Date.now(),
      firstName,
      lastName,
      status,
    };

    if (isEditing) {
      dispatch(updateContact(contactData));
    } else {
      dispatch(addContact(contactData));
    }

    setFirstName("");
    setLastName("");
    setStatus("Inactive");
    setShowForm(false);
  };

  return (
    <div>
      <form className="flex flex-col text-lg gap-4" onSubmit={handleSubmit}>
        <Input
          label="First Name"
          value={firstName}
          onChange={(e: any) => setFirstName(e.target.value)}
        />

        <Input
          label="Last Name"
          value={lastName}
          onChange={(e: any) => setLastName(e.target.value)}
        />

        <div className="flex gap-4 items-center">
          <div className="min-w-28 text-center font-semibold">Status: </div>
          <div className="flex flex-col gap-2">
            <label>
              <input
                type="radio"
                value="Active"
                checked={status === "Active"}
                className="cursor-pointer"
                onChange={handleRadioChange("Active")}
              />{" "}
              Active
            </label>

            <label>
              <input
                type="radio"
                value="Inactive"
                checked={status === "Inactive"}
                className="cursor-pointer"
                onChange={handleRadioChange("Inactive")}
              />{" "}
              Inactive
            </label>
          </div>
        </div>

        <div className="mt-4 pl-2 flex justify-center items-center">
          <IoReturnDownBackOutline
            className="text-3xl cursor-pointer"
            onClick={() => setShowForm(false)}
          />

          <button
            type="submit"
            className="w-max m-auto p-2 px-6 text-xl font-semibold bg-zinc-400 rounded-md "
          >
            {isEditing ? "Save Edited Contact" : "Save Contact"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
