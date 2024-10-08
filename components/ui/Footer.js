import Link from "next/link";
import { useState } from "react";
import ModalContact from "./ModalContact";

export default function Footer() {
  const [contactDeveloper, setContactDeveloper] = useState(false);
  const handleCloseModal = () => {
    setContactDeveloper(false)
  };

  return (
    <>
      <footer className="block py-4">
        <div className="container mx-auto px-4">
          <hr className="mb-4 border-b-1 border-blueGray-200" />
        </div>
      </footer>
      <div className="flex justify-center text-center sm:block sm:p-0 mt-2">
        {contactDeveloper && (
          <ModalContact
            closeModal={handleCloseModal}
          />
        )}
      </div>
    </>
  );
}
