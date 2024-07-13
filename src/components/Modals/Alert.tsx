import { AlertModalProps } from '@/types/appTypes'
import React from 'react'
import { BiSolidErrorCircle, BiSolidCheckCircle, BiLoaderAlt } from 'react-icons/bi'
import { IoIosClose } from 'react-icons/io'
import { useRouter } from 'next/navigation'

const AlertMessage = ({ loading, messageType, modalOpen, setModalOpen }: AlertModalProps) => {

  const router = useRouter();

  function handleClose() {
    setModalOpen(false);

    if (messageType === 'success') {
      setTimeout(() => {
        router.push('/');
      }, 500);
    }
  }

  return (
    <div className={`absolute top-0 left-0 w-full h-full ${modalOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} bg-black/50 flex items-center justify-center backdrop-blur-sm transition-all duration-300`}>
      <div className='relative 2xsm:w-3/4 bg-[#161616] border border-strokedark flex flex-col items-center gap-5 py-10 px-5 rounded-md'>
        {/* close button */}
        <IoIosClose onClick={handleClose} className='absolute top-2 right-2 text-2xl cursor-pointer' />
        {/* end close button */}
        {loading ? (
          <BiLoaderAlt className='text-5xl animate-spin' />
        ) : (
          <React.Fragment>
            {messageType === 'error' ? <BiSolidErrorCircle className='text-5xl fill-red' /> : <BiSolidCheckCircle className='text-5xl fill-green-400' />}
            <h2 className='text-xl text-snow'>
              {messageType === 'error' ? 'Ooops!' : 'Sucesso!'}
            </h2>
            <p className='text-center'>
              {messageType === 'error' ?
                'Parece que esse já existe um hábito com esse nome. Tente um nome diferente'
                :
                'O hábito foi incluído na sua lista. Agora é com você! '}
            </p>
          </React.Fragment>
        )}
      </div>
    </div >
  )
}

export default AlertMessage
