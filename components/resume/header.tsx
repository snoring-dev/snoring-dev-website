import Link from "next/link";
import { TbPhoneCall, TbMail, TbHome } from "react-icons/tb";
import { SiLinkedin, SiGithub, SiInstagram } from "react-icons/si";
import Avatar from "@/components/avatar";
import { PersonalData } from "@/utils/types";

interface Props {
  data: PersonalData;
}

function ResumeHeader({ data }: Props) {
  return (
    <div className="pt-10 w-full flex flex-col-reverse items-center lg:flex-row lg:items-start">
      <div className="lg:w-1/3">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold text-black">
            {data.full_name}
          </h1>
          <h2 className="text-lg text-gray-700">{data.job_title}</h2>
        </div>
        <div className="mt-4 flex flex-col text-sm text-gray-400 space-y-2">
          <p className="flex flex-row space-x-2">
            <TbMail className="w-4 h-4" />
            <span>{data.email}</span>
          </p>
          <p className="flex flex-row space-x-2">
            <TbPhoneCall className="w-4 h-4" />
            <span>{data.phone}</span>
          </p>
          <p className="flex flex-row space-x-2">
            <TbHome className="w-4 h-4" />
            <span>{data.address}</span>
          </p>
        </div>
      </div>
      <div className="lg:w-2/3 flex items-end justify-end border-b mb-4 lg:border-none lg:mb-0">
        <div className="w-36 flex flex-col items-end justify-center py-2">
          <Avatar
            source={data.picture_url}
            alt={`${data.full_name} | ${data.job_title}`}
          />
          <div className="pb-4 lg:pb-0 m-auto flex flex-row items-center space-x-3 justify-center mt-3">
            {data.links.map((link) => {
              let Icon;
              switch (link.name) {
                case "instagram":
                  Icon = SiInstagram;
                  break;
                case "github":
                  Icon = SiGithub;
                  break;
                case "linkedin":
                  Icon = SiLinkedin;
                  break;
              }
              return (
                <Link key={link._key} target="_blank" href={link.value}>
                  <Icon className="w-6 h-6 text-gray-400 hover:text-black transition-colors duration-300" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeHeader;
