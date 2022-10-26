import { DownloadInfo } from '@/types/types';

export default function Downloads({ links }: { links: DownloadInfo[] }) {
  const tableHeads = Object.keys(links[0]);

  return (
    <section className='px-4'>
      <div className='mx-auto max-w-5xl'>
        <h3>Download</h3>

        <table className='mt-2 mb-4 w-full border-2'>
          <thead>
            <tr className='uppercase'>
              {tableHeads.map((data) => (
                <th className='p-2 text-left sm:p-4' key={data}>
                  {data}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {links.map((item) => (
              <tr className='text-gray-300' key={item.server}>
                <td className='px-1 py-2 capitalize sm:p-4'>{item.server}</td>
                <td className='px-1 py-2'>{item.quality}</td>
                <td className='px-1 py-2'>{item.fileSize}</td>
                <td className='px-1 py-2 text-red-400'>
                  <a href={item.link} target='_blank' rel='noreferrer'>
                    Download
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
