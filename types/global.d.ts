interface ServicesData {
  title: string;
  image: string;
  alt: string;
}

interface HiringInfo {
  name: string;
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

export {
  ServicesData,
  HiringInfo,
  StartupsInfo,
  ContactInfo,
  WorkSpaceInfo
}
