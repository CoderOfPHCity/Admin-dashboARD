import './widgetL.css'

export default function widgetSL() {
    const Button = ({ type }) =>  {
      return <button className={ 'widgetlgBTN ' + type }>{type}</button>
    }
  return (
    <div className='widgetlg'>
      <h3 className="widgetlgT">Latest Transactions</h3>
      <table className="widgetlgTable">
        <tr className="widgetlgTr">  
          <th className="widgetlgTh">Customer</th>
          <th className="widgetlgTh">Date</th>
          <th className="widgetlgTh">Status</th>
          <th className="widgetlgTh">Balance</th>
        </tr>
        <tr className="widgetlgTr">
          <td className="widgetlgUser">
            <img src="www.nairaland.conm" alt="logo" className="widgetlgimg" />
              <span className="widgetlgN">Elon Musk</span>
          </td>
          <td className="widgetlgD"> 20 May 2022</td>
          <td className="widgetlgAmt"> $346.00</td>
          <td className="widgetlgSta"> </td>
            <Button type='Approved' />
        </tr>
        <tr className="widgetlgTr">
          <td className="widgetlgUser">
            <img src="www.nairaland.conm" alt="logo" className="widgetlgimg" />
              <span className="widgetlgN">Jay Vardy</span>
          </td>
          <td className="widgetlgD"> 31 May 2022</td>
          <td className="widgetlgAmt"> $146.00</td>
          <td className="widgetlgSta"> </td>
            <Button type='Waiting' />
        </tr>
        <tr className="widgetlgTr">
          <td className="widgetlgUser">
            <img src="www.nairaland.conm" alt="logo" className="widgetlgimg" />
              <span className="widgetlgN">Peter Mill</span>
          </td>
          <td className="widgetlgD"> 18 May 2022</td>
          <td className="widgetlgAmt"> $66.00</td>
          <td className="widgetlgSta"> </td>
            <Button type='Approved' />
        </tr>
        <tr className="widgetlgTr">
          <td className="widgetlgUser">
            <img src="www.nairaland.conm" alt="logo" className="widgetlgimg" />
              <span className="widgetlgN">Henry Stone</span>
          </td>
          <td className="widgetlgD"> 9 ,may 2022</td>
          <td className="widgetlgAmt"> $142.00</td>
          <td className="widgetlgSta"> </td>
            <Button type='Pending' />
        </tr>
      </table>
      
    </div>
  )
}