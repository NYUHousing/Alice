import React from 'react';
import { Search, TicketPlus, PieChart, CheckSquare, ChevronLeft } from 'lucide-react';
import { Logo } from '../ui/Logo';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden transition-opacity duration-200 ease-in-out" 
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:z-auto`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <Logo />
          <button 
            onClick={toggleSidebar} 
            className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-200 lg:hidden"
          >
            <ChevronLeft size={20} />
          </button>
        </div>
        
        <nav className="p-4 space-y-2">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Tasks</h2>
          
          <SidebarButton icon={<Search size={18} />} label="Search Docs" />
          <SidebarButton icon={<TicketPlus size={18} />} label="Create Ticket" />
          <SidebarButton icon={<PieChart size={18} />} label="Run Report" />
          <SidebarButton icon={<CheckSquare size={18} />} label="My Tasks" />
        </nav>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-800 font-medium">
              A
            </div>
            <div className="text-sm">
              <p className="font-medium">Alice</p>
              <p className="text-gray-500 text-xs">AI Assistant</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

const SidebarButton: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => {
  return (
    <button className="flex items-center w-full px-3 py-2 text-gray-700 rounded-md hover:bg-purple-50 hover:text-purple-800 transition-colors duration-200 group">
      <span className="mr-3 text-gray-500 group-hover:text-purple-800 transition-colors duration-200">{icon}</span>
      <span className="font-medium">{label}</span>
    </button>
  );
};

export default Sidebar;