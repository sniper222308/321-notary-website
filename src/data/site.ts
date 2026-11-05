import business from './business.json';
import hours from './hours.json';
import services from './services.json';

const days = Object.entries(hours).map(([day, value]) => ({ day: day[0].toUpperCase() + day.slice(1), ...value }));
const formatTime = (time: string) => {
  const [hour, minute] = time.split(':').map(Number);
  return `${hour % 12 || 12}:${String(minute).padStart(2, '0')} ${hour < 12 ? 'AM' : 'PM'}`;
};
export const displayHours = (day: typeof days[number]) => day.closed ? 'Closed' : `${formatTime(day.opens)} – ${formatTime(day.closes)}`;
export const site = {
  ...business,
  phoneLink: `tel:${business.phone.replace(/[^\d+]/g, '')}`,
  maps: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${business.address}, ${business.city}, ${business.state} ${business.zip}`)}`,
  hours: days,
  services: services.services,
};
