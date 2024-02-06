import createMemberAction from "@/actions/createMemberAction";
import FooterContentDashboard from "@/components/footerContentDashboard";
import Form from "@/components/form";
import FormInput from "@/components/formInput";
import MenuDashboard from "@/components/menuDashboard";
import SubmitButton from "@/components/submitButton";
import { menuList } from "@/utils/mocks/menuList";

const CreateMemberPage = () => {
  return (
    <main className="flex min-h-screen w-full flex-row items-center bg-white relative">
      <MenuDashboard menuList={menuList} />
      <section className="bg-[#F6F6F9] min-h-screen w-full flex flex-col box-border overflow-hidden relative items-center">
        <header className="w-full bg-white h-[8.3125rem] pt-10 pl-[1.875rem]">
          <div className="flex flex-row items-center gap-4 relative">
            <h1 className="text-black font-bold text-[2.0625rem] leading-normal">Add member</h1>
          </div>
        </header>

        <article className=" bg-white mx-[2.125rem] mt-[2.875rem] rounded-[0.625rem] w-[45.375rem] h-[33rem] flex flex-col items-center pt-[3rem]">
          <Form submitHandle={createMemberAction} className="flex flex-col gap-[1.6875rem]">
            <FormInput label="First name" name="first-name" className="w-full md:w-[36rem] h-14 rounded-[0.3125rem] bg-white text-inputTextColor border-[#D9D9D9] border-solid border-2 px-[1.5625rem] py-[1.4375rem] text-base leading-[1.4063rem] font-normal"/>
            <FormInput label="Last name" name="last-name" className="w-full md:w-[36rem] h-14 rounded-[0.3125rem] bg-white text-inputTextColor border-[#D9D9D9] border-solid border-2 px-[1.5625rem] py-[1.4375rem] text-base leading-[1.4063rem] font-normal"/>
            <FormInput label="Email" name="email" className="w-full md:w-[36rem] h-14 rounded-[0.3125rem] bg-white text-inputTextColor border-[#D9D9D9] border-solid border-2 px-[1.5625rem] py-[1.4375rem] text-base leading-[1.4063rem] font-normal"/>
            <SubmitButton className="bg-black text-white w-full md:w-[36rem] h-20 rounded-[0.3125rem] text-base leading-[1.4063rem] font-medium" type="submit" label="Create and send invite" />
          </Form>
        </article>

        <FooterContentDashboard />
      </section>
    </main>
  )
}

export default CreateMemberPage;