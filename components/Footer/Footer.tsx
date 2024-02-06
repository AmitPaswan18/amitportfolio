import Link from "next/link"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
  return (
    <div className="flex justify-between w-full p-12">
     <div className="text-lg pl-10">
        All rights reserved © Amit Paswan 2024
     </div>
     <div className="w-fit flex justify-start gap-10 pl-32 pr-24">
     <Link href="https://twitter.com/amit_paswan18" target="_blank" rel="noreferrer">
        <XIcon fontSize="large"/>
      </Link>
      <Link
        href="https://instagram.com/amit.paswan_"
        target="_blank"
        rel="noreferrer"
      >
        <InstagramIcon fontSize="large" />
      </Link>
      <Link href="https://github.com/AmitPaswan18" target="_blank" rel="noreferrer">
        <GitHubIcon fontSize="large"/>
      </Link>
      <Link
        href="https://in.linkedin.com/in/amit-paswan-04134a23b"
        target="_blank"
        rel="noreferrer"
      >
     <LinkedInIcon fontSize="large"/>
      </Link>
     </div>
    </div>
  )
}

export default Footer