'use client'

import deleteMemberAction from '@/actions/deleteMemberAction'
import { Popover, Dialog } from '@headlessui/react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify';

interface DeleteMessageProps {
  data?: string;
  success?: string;
  errors?: string
}

const UserOptions = ({ user }: { user: number }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [deleteMessage, setDeleteMessage] = useState<DeleteMessageProps>({});

  useEffect(() => {
    if (deleteMessage && deleteMessage.errors) {
      toast.error(deleteMessage.errors, {
        position: "top-right",
        theme: 'colored',
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        progress: 0,
        toastId: "error"
      })
    }

    if (deleteMessage && deleteMessage.success) {
      toast.success(deleteMessage.success, {
        position: "top-right",
        theme: 'colored',
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        progress: 0,
        toastId: "success"
      })
    }

  }, [deleteMessage])

  return (
    <>
      <Popover className="relative max-w-max box-border -top-3">
        {({ open }) => (
          <>
            <Popover.Button className={open ? "flex items-center bg-black text-white gap-1 py-2 px-3 outline-none rounded-t-[0.1875rem]" : "flex items-center bg-[#F5F4F7] gap-1 py-2 px-3 outline-none rounded-[0.1875rem]"} >
              Options
              {
                !open ?
                  <svg className='ml-1' width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.31625 -5.75351e-08L-2.54505e-07 1.1776L6.5 7L13 1.1776L11.6837 -5.10713e-07L6.5 4.64115L1.31625 -5.75351e-08Z" fill="black" />
                  </svg>
                  :
                  <svg className='ml-1' width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 11.6838L1.1776 13L7 6.5L1.1776 0L0 1.31625L4.64115 6.5L0 11.6838Z" fill="white" />
                  </svg>
              }
            </Popover.Button>
            <Popover.Panel className="absolute z-10 bg-black text-white right-0 rounded-[0.1875rem] rounded-tr-none text-sm leading-normal font-semibold">
              <div className="grid grid-cols-1 w-[9.25rem] py-4 px-3">
                <Link className="py-1" href={{
                  pathname: `/dashboard/team_members/${user}`,
                }}>Edit</Link>
                <Link className="py-1" href="#">Reset password</Link>
                <button className="py-1 w-full text-left" onClick={() => setIsOpen(true)}>Delete</button>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>

      <Dialog className={"bg-black/90 fixed inset-0 flex items-center justify-center z-20"} open={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Panel className="bg-white w-[30.125rem] h-[24.3125rem] flex flex-col gap-6 p-12 rounded-[0.625rem]">
          <Dialog.Title className="text-[1.625rem]">Are you sure?</Dialog.Title>
          <Dialog.Description className="text-[1.4375rem] text-[#838383] -mt-4">
            Reversing this action is not possible.
          </Dialog.Description>
          <button className='bg-black w-full text-white h-16 mt-2 rounded-[0.3125rem]' onClick={ async () => {
            const res = await deleteMemberAction(user)
            setDeleteMessage(res)
          }}>Yes, Please delete member</button>
          <button className='bg-[#EEEEEE] w-full -mt-2 text-[#424242] h-16 rounded-[0.3125rem]' onClick={() => setIsOpen(false)}>Cancel</button>
        </Dialog.Panel>
      </Dialog>
    </>
  )
}

export default UserOptions;