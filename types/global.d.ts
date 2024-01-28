interface ServicesData {
  title: string;
  image: string;
  alt: string;
}

interface HiringInfo {
  name: string;
  last_name: string;
  email: string;
  phone: string;
  hireType: number;
  resume: File | null;
}

interface StartupsInfo {
  name: string;
  email: string;
  phone: string;
  members_count: number;
  pitch: File | null;
}

interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface WorkSpaceInfo {
  name: string;
  email: string;
  phone: string;
  description: string;
}

interface IntershipInfo {
  name: string;
  email: string;
  phone: string;
  university: string;
  cvFile: File | null;
}

interface StartupRegistrationModal {
  name: string;
  email: string;
  phone: string;
  university: string;
  cvFile: File | null;
}

export {
  ServicesData,
  HiringInfo,
  StartupsInfo,
  ContactInfo,
  WorkSpaceInfo,
  IntershipInfo,
  StartupRegistrationModal
}
