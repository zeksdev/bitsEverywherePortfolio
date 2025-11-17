// Icon mapping utility
import {
  FaCloud,
  FaCog,
  FaNetworkWired,
  FaBolt,
  FaMapMarkedAlt,
  FaChartLine,
  FaChartBar,
  FaBroadcastTower,
  FaThermometerHalf,
  FaMobileAlt,
  FaLock,
  FaEye,
  FaFileAlt,
  FaGlobe,
  FaBrain,
  FaProjectDiagram,
  FaReact,
  FaMicrochip,
  FaRobot,
  FaDatabase,
  FaUsers,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';

export const iconMap = {
  FaCloud,
  FaCog,
  FaNetworkWired,
  FaBolt,
  FaMapMarkedAlt,
  FaChartLine,
  FaChartBar,
  FaBroadcastTower,
  FaThermometerHalf,
  FaMobileAlt,
  FaLock,
  FaEye,
  FaFileAlt,
  FaGlobe,
  FaBrain,
  FaProjectDiagram,
  FaReact,
  FaMicrochip,
  FaRobot,
  FaDatabase,
  FaUsers,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
};

// Helper function to get icon component by name
export const getIcon = (iconName) => {
  return iconMap[iconName] || FaCog; // Default to FaCog if not found
};
