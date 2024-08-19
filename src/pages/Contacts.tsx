import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import Form from "../components/Form";
import { useSelector } from "react-redux";
import { selectContacts } from "../store/ContactSlice";
import ContactItems from "../components/ContactItems";
import { MESSAGES } from "../utils/en";

const Contacts = () => {
  const contacts = useSelector(selectContacts);

  const [showForm, setShowForm] = useState<boolean>(false);
  const [editContact, setEditContact] = useState<any>(null);

  const handleCreateContact = () => {
    setEditContact(null); // Clear any existing contact data
    setShowForm(true);
  };

  const handleEditContact = (contact: any) => {
    setEditContact(contact); // Set contact data to be edited
    setShowForm(true);
  };

  return (
    <div className="w-full h-full ">
      <div className="w-full h-full pt-6 flex flex-col items-center justify-center gap-20">
        <div className="">
          {showForm ? (
            <Form
              setShowForm={setShowForm}
              editContact={editContact}
              isEditing={Boolean(editContact)}
            />
          ) : (
            <button
              className="w-max p-3 px-4 text-xl font-semibold shadow-lg bg-zinc-400 rounded-md"
              onClick={handleCreateContact}
            >
              Create Contact
            </button>
          )}
        </div>

        <div className="overflow-scroll">
          {contacts.length === 0 && !showForm ? (
            <div className="w-max p-3 px-2 sm:px-4  flex justify-center items-start gap-3 sm:gap-6 text-lg  rounded-md border border-black">
              <div className="p-3 bg-black rounded-full">
                <ImCross className="text-white" />
              </div>
              <div className="w-60">
                <span className="text-nowrap text-xl font-semibold">
                  "{MESSAGES.NO_CONTACT}"
                </span>
                <br />
                {MESSAGES.ADD_CONTACT_PROMPT}
              </div>
            </div>
          ) : (
            !showForm && <ContactItems handleEditContact={handleEditContact} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
