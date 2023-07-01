import { createContext, useState, useContext } from 'react';

const Appcontext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setisModalOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const openModal = () => setisModalOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);
  const closeModal = () => setisModalOpen(false);

  return (
    <Appcontext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openModal,
        openSidebar,
        closeModal,
        closeSidebar
      }}
    >
      {children}
    </Appcontext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(Appcontext);
};
