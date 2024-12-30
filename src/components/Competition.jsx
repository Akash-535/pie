import React from 'react'
import Heading from '../common/Heading'
import Description from '../common/Description'
import { COMPETITION_LIST } from '../utils/helper'

const Competition = () => {
    return (
    <div className='section mt-2'>
 <div className='container'>
            <div className='d-flex gap-3 flex-lg-row flex-column'>
                    <div className='col-lg-4 col-12'>
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
                    <div className='col-12 col-lg-8 table-bg d-flex'>
                      <div className='d-flex align-items-center justify-content-center'>
                          <table className='custom-table-bg'>
                              <thead>
                                  <tr>
                                      <th></th>
                                      <th className='text-center bg-white fw-semibold table-heading'>Rift</th>
                                      <th className='text-center bg-white fw-semibold table-heading'>Taxscout</th>
                                      <th className='text-center bg-white fw-semibold table-heading'>Coconut</th>
                                      <th className=' text-center bg-lightGreen fw-semibold table-heading'>Pie</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  {COMPETITION_LIST.map((obj, i) => (
                                      <tr key={i}>
                                          <td className={`text-white fw-normal custom-td bg-transparent custom-border-b-none`}>{obj.brand}</td>
                                          <td className={`text-center ${i===5 ? 'custom-fee border-rounded-bottom':''} bg-white custom-td custom-border-b-none`}>{obj.rift}</td>
                                          <td className={`text-center ${i===5 ? 'custom-fee border-rounded-bottom':''} bg-white custom-td custom-border-b-none`}>{obj.taxscout}</td>
                                          <td className={`text-center ${i===5 ? 'custom-fee border-rounded-bottom':''} bg-white custom-td custom-border-b-none`}>{obj.coconut}</td>
                                          <td className={`text-center bg-lightGreen custom-td custom-border-b-none ${i === 5 ? 'custom-fee border-rounded-bottom' : ''}`}>{obj.pie}</td>
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