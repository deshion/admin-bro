import React from 'react'
import { Props } from './props.type'

export const AdminBroLogo: React.FC<Props> = ({ width, height }) => {
  const svgWidth = width || '70px'
  const svgHeight = height || '70px'
  return (
    <svg width={svgWidth} height={svgHeight} viewBox="0 0 70 70" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="156.737419%" id="linearGradient-1">
          <stop stopColor="#879FFA" offset="0%" />
          <stop stopColor="#4268F6" offset="99.9727331%" />
          <stop stopColor="#343F87" offset="100%" />
        </linearGradient>
      </defs>
      <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Titles" transform="translate(-385.000000, -7458.000000)" />
        <g id="Atoms/Logotype/AdminBro-Icon" transform="translate(-1.000000, 0.000000)" fill="url(#linearGradient-1)">
          <path d="M16.7602339,70 C8.05609707,70 1,62.8533093 1,54.0374194 C1,53.9682136 1,53.8991107 1.00130187,53.8301132 L1,22.9143087 C1,20.8434493 2.09140055,18.9297567 3.86338726,17.8935646 L33.1323931,0.778135721 C34.9066409,-0.259378574 37.0933591,-0.259378574 38.8676069,0.778135721 L68.1366127,17.8935646 C69.9085995,18.9297567 71,20.8434493 71,22.9143087 L71,53.8301132 C71,53.8991107 71,53.9682136 71,54.0374194 C71,62.8533093 63.9439029,70 55.2397661,70 C48.956271,70 43.5316289,66.2756016 41.000388,60.8874748 L30.9996134,60.8874746 C28.4683711,66.2756016 23.043729,70 16.7602339,70 Z M42.4071164,52.0535685 L49.286347,55.9002087 C49.3726881,55.9484877 49.4674103,55.9799906 49.5654997,55.9930498 C49.9942382,56.0501299 50.3881408,55.7493582 50.4453059,55.3212573 L50.9862522,51.2701936 C51.0435183,50.8413367 50.9203125,50.4079524 50.6459328,50.0730981 L44.5789333,42.6689041 C44.7320926,41.2424028 44.8106582,39.7936129 44.8106582,38.3265003 C44.8106582,29.5814111 42.0191822,21.4873364 37.2774223,14.8842173 C37.1963826,14.7713658 37.102102,14.6428342 36.9945806,14.4986225 C36.9225034,14.40195 36.8366488,14.3163052 36.7397388,14.2444037 C36.1904687,13.8368773 35.4140149,13.950685 35.0054843,14.4986027 C34.8964818,14.6447939 34.8009947,14.7749825 34.7190227,14.8891686 C29.9794226,21.4913824 27.1893418,29.5835968 27.1893418,38.3265003 C27.1893418,39.7936129 27.2679074,41.2424028 27.4210667,42.6689041 L21.3540672,50.0730981 C21.0796875,50.4079524 20.9564817,50.8413367 21.0137478,51.2701936 L21.5546941,55.3212573 C21.6118592,55.7493582 22.0057618,56.0501299 22.4345003,55.9930498 C22.5325897,55.9799906 22.6273119,55.9484877 22.713653,55.9002087 L29.5928836,52.0535685 C29.9697355,53.091548 30.3881053,54.1096585 30.8459893,55.1058994 L41.1540107,55.1058994 C41.6118947,54.1096585 42.0302645,53.091548 42.4071164,52.0535685 Z M35.5,34 C33.5670034,34 32,32.4329966 32,30.5 C32,28.5670034 33.5670034,27 35.5,27 C37.4329966,27 39,28.5670034 39,30.5 C39,32.4329966 37.4329966,34 35.5,34 Z" id="Shape-Copy-5" />
        </g>
      </g>
    </svg>
  )
}

export default AdminBroLogo
