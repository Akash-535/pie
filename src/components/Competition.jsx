import React from 'react'
import Heading from '../common/Heading'
import Description from '../common/Description'
import { COMPETITION_LIST } from '../utils/helper'

const Competition = () => {
    return (
    <div className='competition-section min-vh-100 d-flex align-items-center justify-content-center py-lg-0 py-md-5 py-3'>
 <div className='container'>
            <div className='d-flex gap-5 flex-lg-row flex-column'>
                    <div className='col-lg-5 col-12 text-md-start text-center'>
                        <Heading text="Competition"/>
                        <Description text="Given our best in class offering, we need to cut through by opting for penetration pricing."/>
                        <div className='py-2'>
                            <Description text="This will allow us to disrupt an established market by introducing our product and service at a lower price to entice new customers to purchase or subscribe. This strategy will help us capture the attention of this very large audience in need of a good solution."/>
                        </div>
                        <div className='pb-2'>
                            <Description text="The current return and refund process centres around either traditional advice or software. By combining both together for an aggressively affordable fee, we think we can capture much of the demand for those people that feel competent in managing their own refunds / returns."/>
                        </div>
                        <Description text="As well as being the cheapest in market, our product offers everything a sole trader needs in one place, whilst pricing innovation of zero commission rather than a commission, will drive customers that are particularly price sensitive."/>
                    </div>
                    <div className="col-12 col-lg-6 d-flex border-radius-xl align-items-center justify-content-center overflow-hidden">
                                                <div className="table-responsive overflow-auto d-flex align-items-center justify-content-center w-100"> 
                              <table className="table-parent">
                                  <thead>
                                      <tr>
                                          <th class=" d-sm-table-cell"></th>
                                          <th className=" text-center bg-white fw-semibold table-heading">Rift</th>
                                          <th className=" text-center bg-white fw-semibold table-heading">Taxscout</th>
                                          <th className=" text-center bg-white fw-semibold table-heading">Coconut</th>
                                          <th className=" text-center bg-lightGreen fw-semibold table-heading">Pie</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      {COMPETITION_LIST.map((obj, i) => (
                                          <tr key={i}>
                                              <td className={`text-white fw-normal custom-td bg-transparent border-b-0 ${i === 3 ? 'max-w-sm' : ''}`}>{obj.brand}</td>
                                              <td className={`text-center ${i === 5 ? 'custom-fee' : ''} bg-white custom-td border-b-0`}>{obj.lineOne}</td>
                                              <td className={`text-center ${i === 5 ? 'custom-fee' : ''} bg-white custom-td border-b-0`}>{obj.lineTwo}</td>
                                              <td className={`text-center ${i === 5 ? 'custom-fee' : ''} bg-white custom-td border-b-0`}>{obj.lineThree}</td>
                                              <td className={`text-center ${i === 5 ? 'custom-fee' : ''} bg-lightGreen custom-td border-b-0`}>{obj.lineFour}</td>
                                          </tr>
                                      ))}
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
                    </div>
    </div>
  )
}

export default Competition