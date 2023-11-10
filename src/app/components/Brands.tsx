"use client"

import React from 'react'
import hp from '../../../public/brands-and-logotypes.png';
import stanford from '../../../public/stanford-university-logo.png'
import Image from 'next/image';

const Brands = () => {
  return (
    <div className='w-full flex flex-col justify-center align-middle py-[40px] gap-4 overflow-hidden  bg-gray-primary'>
      
      <div className='self-center p-2 animate-scrolling-logos'>
        <ul className='flex gap-[1.5rem]'>
            <li><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 50 50">
                  <path d="M 14.947266 8.921875 A 1.0001 1.0001 0 0 0 14.892578 8.9238281 L 14.113281 8.9570312 A 1.0001 1.0001 0 0 0 14.076172 8.9609375 C 11.747543 9.150916 9.6066184 10.132131 7.9492188 11.433594 A 1.0001 1.0001 0 0 0 7.9453125 11.435547 C 6.3196299 12.724106 5.0756503 14.252187 4.0957031 15.820312 C 3.1078176 17.387953 2.3592125 19.019453 1.7597656 20.664062 A 1.0001 1.0001 0 0 0 1.7578125 20.673828 C 0.589844 23.972592 -0.03940949 27.398587 -0.05078125 30.941406 A 1.0001 1.0001 0 0 0 -0.05078125 30.953125 C -0.03513268 32.802786 0.19948413 34.782218 0.97460938 36.765625 C 1.7415989 38.750581 3.2018376 40.865402 5.5722656 42.074219 C 5.5722656 42.074219 5.5742188 42.074219 5.5742188 42.074219 C 5.5742188 42.074219 5.5761719 42.076172 5.5761719 42.076172 C 6.7544032 42.681048 8.0664925 42.9844 9.3359375 42.992188 C 10.773404 43.023427 12.079676 42.617679 13.111328 42.119141 A 1.0001 1.0001 0 0 0 13.121094 42.115234 C 15.142885 41.113533 16.542533 39.768159 17.738281 38.501953 A 1.0001 1.0001 0 0 0 17.748047 38.492188 C 20.133409 35.90012 21.881338 33.108321 23.474609 30.324219 L 23.474609 30.322266 C 24.026177 29.363035 24.503092 28.378555 25 27.400391 C 25.497169 28.379069 25.973439 29.364554 26.525391 30.324219 C 28.118565 33.107145 29.866501 35.900024 32.251953 38.492188 A 1.0001 1.0001 0 0 0 32.261719 38.501953 C 33.458241 39.768919 34.856712 41.114416 36.878906 42.115234 A 1.0001 1.0001 0 0 0 36.888672 42.119141 C 37.920848 42.617933 39.227627 43.02225 40.664062 42.992188 C 41.933507 42.984387 43.245597 42.681048 44.423828 42.076172 L 44.427734 42.074219 C 46.796117 40.865318 48.256006 38.753493 49.023438 36.769531 C 49.799861 34.784735 50.035122 32.804079 50.050781 30.953125 A 1.0001 1.0001 0 0 0 50.050781 30.941406 C 50.039347 27.39938 49.409032 23.972328 48.242188 20.673828 A 1.0001 1.0001 0 0 0 48.240234 20.666016 C 47.641926 19.02156 46.893803 17.388622 45.90625 15.822266 C 44.926303 14.25414 43.68037 12.726059 42.054688 11.4375 A 1.0001 1.0001 0 0 0 42.050781 11.433594 C 40.393375 10.132125 38.25246 9.1509165 35.923828 8.9609375 A 1.0001 1.0001 0 0 0 35.888672 8.9589844 L 35.109375 8.9238281 A 1.0001 1.0001 0 0 0 35.052734 8.9238281 C 34.787025 8.9267581 34.457567 8.9283382 34.103516 8.9726562 C 33.450652 9.0358413 32.848006 9.1787586 32.296875 9.3457031 A 1.0001 1.0001 0 0 0 32.289062 9.3476562 C 31.149007 9.7029521 30.168709 10.22486 29.318359 10.783203 A 1.0001 1.0001 0 0 0 29.314453 10.787109 C 27.627266 11.911191 26.326156 13.227508 25.191406 14.525391 C 25.120386 14.606401 25.06729 14.679448 25 14.759766 C 24.93324 14.679796 24.880888 14.606083 24.810547 14.525391 A 1.0001 1.0001 0 0 0 24.808594 14.523438 C 23.673436 13.227293 22.374571 11.912178 20.6875 10.787109 A 1.0001 1.0001 0 0 0 20.681641 10.783203 C 19.8307 10.225141 18.849909 9.7029626 17.710938 9.3476562 A 1.0001 1.0001 0 0 0 17.703125 9.3457031 C 17.151298 9.1788716 16.548575 9.0338848 15.896484 8.9707031 C 15.543288 8.9266611 15.212414 8.924799 14.947266 8.921875 z M 14.953125 10.923828 C 15.215466 10.926928 15.475682 10.931128 15.660156 10.955078 A 1.0001 1.0001 0 0 0 15.695312 10.958984 C 16.174332 11.004444 16.646301 11.116396 17.121094 11.259766 C 17.122294 11.260142 17.1238 11.259389 17.125 11.259766 C 18.039673 11.546423 18.845799 11.970992 19.583984 12.455078 C 21.063986 13.443142 22.227377 14.611697 23.304688 15.841797 C 23.605526 16.187076 23.892206 16.563082 24.205078 16.957031 A 1.0001 1.0001 0 0 0 24.212891 16.966797 C 24.214091 16.968297 24.215597 16.969203 24.216797 16.970703 A 1.0001 1.0001 0 0 0 24.259766 17.019531 C 25.672189 18.575081 26.63249 20.246858 27.392578 21.513672 A 1.0001 1.0001 0 0 0 27.533203 21.699219 C 28.637888 23.72602 29.891924 26.001231 31.052734 27.878906 A 1.0001 1.0001 0 0 0 31.056641 27.886719 C 32.662473 30.433414 34.408479 32.942893 36.396484 35.023438 A 1.0001 1.0001 0 0 0 36.400391 35.025391 C 37.473548 36.138211 38.969259 37.005859 40.884766 37.005859 C 41.55985 37.005859 42.244035 36.892108 42.869141 36.5625 C 43.493044 36.233526 44.035185 35.658316 44.314453 34.916016 C 44.776736 33.712007 44.952605 32.341612 44.947266 30.951172 A 1.0001 1.0001 0 0 0 44.947266 30.945312 C 44.920085 28.079492 44.358561 25.13764 43.371094 22.431641 L 43.369141 22.427734 C 42.395412 19.726274 40.928446 17.130848 38.875 15.509766 A 1.0001 1.0001 0 0 0 38.867188 15.503906 C 37.837032 14.708341 36.695465 14.213804 35.498047 14.103516 A 1.0001 1.0001 0 0 0 35.451172 14.101562 L 35.074219 14.083984 A 1.0001 1.0001 0 0 0 34.994141 14.083984 C 34.937561 14.085984 34.803954 14.086579 34.634766 14.105469 C 34.32167 14.127609 34.058042 14.192969 33.828125 14.255859 A 1.0001 1.0001 0 0 0 33.8125 14.261719 C 33.240729 14.428006 32.678338 14.706358 32.121094 15.0625 A 1.0001 1.0001 0 0 0 32.119141 15.0625 C 31.002744 15.778024 29.961819 16.771125 28.994141 17.857422 C 28.623989 18.271481 28.324156 18.634262 28.033203 18.951172 C 27.525619 18.131711 27.004203 17.33093 26.246094 16.398438 C 26.394142 16.213269 26.545174 16.015017 26.695312 15.84375 A 1.0001 1.0001 0 0 0 26.697266 15.841797 C 27.774516 14.60968 28.939063 13.441043 30.421875 12.453125 C 31.159705 11.96913 31.965645 11.543872 32.882812 11.257812 L 32.884766 11.257812 C 33.356771 11.115203 33.82797 11.006284 34.306641 10.960938 A 1.0001 1.0001 0 0 0 34.341797 10.957031 C 34.531885 10.932331 34.797754 10.926858 35.068359 10.923828 L 35.074219 10.923828 L 35.761719 10.955078 C 35.761719 10.955078 35.763672 10.955078 35.763672 10.955078 C 37.625796 11.107452 39.436479 11.926143 40.814453 13.007812 C 40.814453 13.007812 40.816406 13.007812 40.816406 13.007812 C 42.226545 14.126527 43.325831 15.466455 44.210938 16.882812 A 1.0001 1.0001 0 0 0 44.212891 16.884766 C 45.110146 18.307243 45.798216 19.807389 46.359375 21.349609 C 47.45307 24.444455 48.038813 27.633171 48.050781 30.935547 L 48.050781 30.941406 C 48.050788 30.943406 48.050775 30.945266 48.050781 30.947266 C 48.035571 32.638561 47.822177 34.353667 47.162109 36.041016 A 1.0001 1.0001 0 0 0 47.160156 36.044922 C 46.529627 37.67672 45.337336 39.366258 43.515625 40.294922 A 1.0001 1.0001 0 0 0 43.513672 40.294922 C 42.63278 40.747757 41.60171 40.989002 40.648438 40.994141 A 1.0001 1.0001 0 0 0 40.630859 40.994141 C 39.602855 41.017451 38.574359 40.711759 37.759766 40.318359 L 37.757812 40.318359 C 36.05122 39.471989 34.867293 38.347917 33.724609 37.138672 L 33.722656 37.136719 C 31.493418 34.71389 29.82788 32.063951 28.261719 29.328125 A 1.0001 1.0001 0 0 0 28.259766 29.326172 C 27.417941 27.862512 26.644478 26.348613 25.908203 24.822266 C 25.905903 24.817566 25.902691 24.813364 25.900391 24.808594 A 1.0001 1.0001 0 0 0 25.859375 24.730469 C 25.857675 24.727669 25.855216 24.723603 25.853516 24.720703 A 1.0001 1.0001 0 0 0 25.84375 24.705078 C 25.1318 23.509934 24.18374 21.887761 23.25 20.693359 A 1.0001 1.0001 0 0 0 23.166016 20.554688 C 23.158416 20.544518 23.150178 20.535561 23.142578 20.525391 C 22.45049 19.599528 21.756276 18.696853 21.005859 17.857422 C 20.038181 16.771125 18.997256 15.778024 17.880859 15.0625 A 1.0001 1.0001 0 0 0 17.878906 15.0625 C 17.321707 14.706361 16.759271 14.428006 16.1875 14.261719 A 1.0001 1.0001 0 0 0 16.177734 14.257812 C 15.942312 14.192063 15.673569 14.125129 15.361328 14.103516 C 15.195334 14.085386 15.06181 14.085984 15.005859 14.083984 A 1.0001 1.0001 0 0 0 14.925781 14.083984 L 14.548828 14.101562 A 1.0001 1.0001 0 0 0 14.501953 14.103516 C 13.304596 14.213799 12.162528 14.707805 11.132812 15.503906 A 1.0001 1.0001 0 0 0 11.125 15.509766 C 9.0700206 17.130847 7.6026471 19.728779 6.6289062 22.431641 C 5.6414389 25.13764 5.0799083 28.07951 5.0527344 30.945312 A 1.0001 1.0001 0 0 0 5.0527344 30.951172 C 5.0484644 32.341893 5.2243733 33.713932 5.6875 34.917969 C 5.6879447 34.919169 5.6870548 34.920675 5.6875 34.921875 C 6.1480682 36.145883 6.8842408 37.094046 7.8417969 37.595703 C 7.8417969 37.595703 7.84375 37.595703 7.84375 37.595703 C 7.84375 37.595703 7.8457031 37.597656 7.8457031 37.597656 C 8.304216 37.838324 8.8394382 37.97476 9.4023438 37.986328 C 9.9099943 38.015628 10.430047 37.896438 10.980469 37.654297 A 1.0001 1.0001 0 0 0 10.984375 37.650391 C 12.121978 37.142598 13.213222 36.217233 14.214844 35.179688 A 1.0001 1.0001 0 0 0 14.21875 35.175781 C 16.205462 33.094463 17.951858 30.587541 19.558594 28.041016 A 1.0001 1.0001 0 0 0 19.564453 28.033203 C 20.562731 26.41795 21.487863 24.7476 22.416016 23.072266 C 22.909707 23.820258 23.393363 24.534723 23.845703 25.294922 C 23.179242 26.65859 22.493768 28.016022 21.740234 29.326172 A 1.0001 1.0001 0 0 0 21.738281 29.328125 C 20.172217 32.064773 18.50662 34.713787 16.277344 37.136719 C 16.277344 37.136719 16.275391 37.138672 16.275391 37.138672 C 15.132983 38.347676 13.945569 39.472592 12.236328 40.320312 C 11.421773 40.713144 10.396579 41.018221 9.3710938 40.994141 A 1.0001 1.0001 0 0 0 9.3515625 40.994141 C 8.3983608 40.988801 7.3672198 40.747757 6.4863281 40.294922 A 1.0001 1.0001 0 0 0 6.484375 40.292969 C 4.6631879 39.365489 3.4704171 37.676835 2.8398438 36.044922 A 1.0001 1.0001 0 0 0 2.8378906 36.041016 C 2.1778201 34.353661 1.9644286 32.638561 1.9492188 30.947266 L 1.9492188 30.935547 C 1.9611927 27.630034 2.5448299 24.440019 3.640625 21.34375 C 3.6411051 21.34235 3.6420981 21.341244 3.6425781 21.339844 C 4.2041892 19.800702 4.8935602 18.305414 5.7890625 16.884766 A 1.0001 1.0001 0 0 0 5.7910156 16.880859 C 6.6770685 15.462985 7.7751826 14.123347 9.1875 13.003906 C 10.565381 11.922528 12.376496 11.105471 14.238281 10.953125 L 14.240234 10.953125 L 14.953125 10.923828 z M 14.984375 16.083984 C 15.060275 16.085984 15.131301 16.087991 15.130859 16.087891 A 1.0001 1.0001 0 0 0 15.216797 16.095703 C 15.285007 16.099503 15.437058 16.128661 15.628906 16.181641 C 15.951135 16.275351 16.367979 16.470189 16.802734 16.748047 C 17.679772 17.310573 18.622025 18.186554 19.513672 19.1875 A 1.0001 1.0001 0 0 0 19.513672 19.189453 C 20.068613 19.810221 20.612262 20.524609 21.160156 21.246094 C 20.091938 23.201609 19.013494 25.11751 17.867188 26.972656 C 16.293923 29.466131 14.608725 31.87224 12.773438 33.794922 C 11.881338 34.718191 10.880897 35.505767 10.173828 35.822266 C 9.8011422 35.986215 9.6162873 36.003177 9.5117188 35.996094 A 1.0001 1.0001 0 0 0 9.4550781 35.994141 C 9.1732472 35.990841 8.9854479 35.937791 8.7734375 35.826172 A 1.0001 1.0001 0 0 0 8.7714844 35.824219 C 8.3935169 35.626861 7.8837373 35.084302 7.5566406 34.210938 A 1.0001 1.0001 0 0 0 7.5546875 34.203125 C 7.2174045 33.32753 7.0496224 32.174449 7.0527344 30.964844 L 7.0527344 30.960938 C 7.0527344 30.960938 7.0527344 30.958984 7.0527344 30.958984 C 7.0782534 28.343934 7.5988035 25.608358 8.5097656 23.113281 A 1.0001 1.0001 0 0 0 8.5117188 23.109375 C 9.4012492 20.64026 10.779954 18.333519 12.361328 17.083984 C 13.144828 16.4792 13.905731 16.169947 14.681641 16.097656 L 14.984375 16.083984 z M 35.015625 16.083984 L 35.318359 16.097656 C 36.092866 16.169816 36.853113 16.47878 37.636719 17.082031 C 39.219411 18.332477 40.598414 20.639326 41.488281 23.109375 A 1.0001 1.0001 0 0 0 41.490234 23.113281 C 42.401863 25.610183 42.922453 28.348057 42.947266 30.964844 C 42.951266 32.173952 42.784813 33.326006 42.447266 34.203125 A 1.0001 1.0001 0 0 0 42.443359 34.210938 C 42.328148 34.518558 42.180941 34.663577 41.935547 34.792969 C 41.690153 34.922361 41.325681 35.005859 40.884766 35.005859 C 39.536018 35.005859 38.663667 34.489841 37.84375 33.640625 C 36.009862 31.721373 34.324531 29.318369 32.753906 26.828125 L 32.748047 26.820312 C 31.604424 24.969835 30.330189 22.660494 29.220703 20.623047 C 29.609584 20.160498 29.916821 19.826516 30.486328 19.189453 A 1.0001 1.0001 0 0 0 30.486328 19.1875 C 31.377975 18.186554 32.320228 17.310573 33.197266 16.748047 L 33.199219 16.746094 C 33.632163 16.469679 34.047825 16.277335 34.369141 16.183594 C 34.369141 16.183594 34.371094 16.181641 34.371094 16.181641 C 34.565482 16.129351 34.720559 16.099173 34.783203 16.095703 A 1.0001 1.0001 0 0 0 34.869141 16.087891 C 34.868699 16.087954 34.939721 16.085984 35.015625 16.083984 z"></path>
                  </svg>
            </li>
            <li>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 30 30">
              <path d="M 6 4 C 4.895 4 4 4.895 4 6 L 4 12 C 4 13.105 4.895 14 6 14 L 12 14 C 13.105 14 14 13.105 14 12 L 14 6 C 14 4.895 13.105 4 12 4 L 6 4 z M 18 4 C 16.895 4 16 4.895 16 6 L 16 12 C 16 13.105 16.895 14 18 14 L 24 14 C 25.105 14 26 13.105 26 12 L 26 6 C 26 4.895 25.105 4 24 4 L 18 4 z M 6 16 C 4.895 16 4 16.895 4 18 L 4 24 C 4 25.105 4.895 26 6 26 L 12 26 C 13.105 26 14 25.105 14 24 L 14 18 C 14 16.895 13.105 16 12 16 L 6 16 z M 18 16 C 16.895 16 16 16.895 16 18 L 16 24 C 16 25.105 16.895 26 18 26 L 24 26 C 25.105 26 26 25.105 26 24 L 26 18 C 26 16.895 25.105 16 24 16 L 18 16 z"></path>
          </svg>
            </li>
            <li>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 30 30">
              <path d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z"></path>
              </svg>
            </li>
            <li className='self-start'>
              <Image src={stanford} alt='stanford' width={90} height={150}/>
            </li>
            <li className='self-start'>
              <Image src={hp} alt='hp' width={90} height={90}/>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Brands