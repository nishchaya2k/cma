import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeContact, selectContacts } from "../store/ContactSlice";

const ContactItems = ({ handleEditContact }: any) => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 ">
      {contacts?.map((contact, id) => (
        <div
          key={id}
          className="w-80 border border-black p-2 flex flex-col justify-center items-start  rounded-md bg-zinc-200 shadow-xl text-lg shrink-0"
        >
          <div>
            <span className="font-semibold">Name: </span> {contact.firstName}{" "}
            {contact.lastName}
          </div>
          <div>
            <span className="font-semibold">Status: </span>
            <span
              className={`${
                contact.status === "Inactive"
                  ? "text-red-600"
                  : "text-green-500"
              }`}
            >
              {contact.status}
            </span>
          </div>
          <div className={`space-x-4 mt-4 text-gray-400 cursor-pointer`}>
            <span
              className="hover:text-gray-600"
              onClick={() => handleEditContact(contact)}
            >
              Edit
            </span>
            <span
              className="hover:text-gray-600"
              onClick={() => dispatch(removeContact(contact.id))}
            >
              Delete
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactItems;
