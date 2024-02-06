import Link from "next/link";
import FooterContentDashboard from "@/components/footerContentDashboard";
import MenuDashboard from "@/components/menuDashboard";
import { menuList } from "@/utils/mocks/menuList";
import UserOptions from "@/components/userOptions";
import getAllMembersAction from "@/actions/getAllMembersAction";

interface MemberProps {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

const TeamMembersPage = async () => {
  const { data } = await getAllMembersAction()
  console.log("lista de membros", data.length)

  return (
    <main className="flex min-h-screen min-w-full flex-row items-center bg-white relative">
      <MenuDashboard menuList={menuList} />
      <section className="bg-[#F6F6F9] min-h-screen w-full min-w-min flex flex-col box-border overflow-x-scroll relative items-center">
        <header className="w-full bg-white h-[9.375rem] pt-10 pl-[1.875rem]">
          <div className="flex flex-row items-center gap-4 relative">
            <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="16" height="3" fill="black" />
              <rect y="18" width="16" height="3" fill="black" />
              <rect y="9" width="12" height="3" fill="black" />
            </svg>

            <h1 className="text-black font-bold text-[2.0625rem] leading-normal">Team Members</h1>

            <Link
              href="/dashboard/team_members/create"
              className="right-10 top-3 absolute bg-transparent border-black border-solid border-[0.0625rem] rounded py-[0.5625rem] px-[1.0625rem] text-[1.1875rem] leading-normal font-semibold text-black"> + Add member
            </Link>
          </div>

          <h2 className="text-[#838383] text-[1.4375rem] font-normal leading-normal">{data.length} members</h2>
        </header>

        <article className="relative flex rounded-[0.625rem] px-8 pt-2 pb-[10.625rem] bg-white mx-[2.125rem] mt-[2.875rem] min-w-[97%] overflow-y-scroll max-h-[540px]">
          <table className="w-full">
            <thead className="text-lg text-[#A3A5A8] font-semibold leading-normal">
              <tr className="text-left h-28">
                <th>Name</th>
                <th>Email</th>
                <th>Created date</th>
                <th>Last access</th>
              </tr>
            </thead>
            <tbody className="">
              {data.map((user: MemberProps) => (
                <tr key={user.id} className="border-b-[0.0625rem] relative">
                  <td className="flex relative items-center m-4 -bottom-2"><div className="rounded-full bg-[#F5F4F7] w-12 h-12 mr-4" />{`${user.first_name} ${user.last_name[0]}.`}</td>
                  <td className="m-4">{user.email}</td>
                  <td className="m-4">June 1, 2019</td>
                  <td className="m-4">June 1, 2019</td>
                  <td className="m-4 justify-end flex">
                    <UserOptions user={user.id}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
        <FooterContentDashboard />
      </section>
    </main>
  )
}

export default TeamMembersPage;