import  TableComponent  from '../components/table'


export default function Home() {

  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
          <div>
            <div className="overflow-x-auto">
              <TableComponent/>
            </div>
          </div> 
      </div> 
    </main>
    </>
  )
}
