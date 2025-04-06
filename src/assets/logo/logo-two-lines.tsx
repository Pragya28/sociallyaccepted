import { LogoProps } from '@/types/interface';
import { cn } from '@/utils/cn';

export const LogoTwoLines = ({ className, scale }: LogoProps) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="868"
      height="355"
      className={cn('inline-block', className)}
    >
      <path
        d="M0 0 C12.87 0 25.74 0 39 0 C38.01 4.29 37.02 8.58 36 13 C38.6296875 11.824375 38.6296875 11.824375 41.3125 10.625 C54.49998554 5.1611709 68.44580105 3.98343195 82 9 C87.98744827 12.18207102 92.29398298 16.76986779 95 23 C96.67522153 28.60758365 97.35764194 33.66250263 97.3125 39.5 C97.30686035 40.27827148 97.3012207 41.05654297 97.29541016 41.85839844 C96.88156454 62.05898153 90.03843765 79.31729367 76.25 94.25 C63.6699932 106.28627369 46.66602458 110.56385258 29.6328125 110.19140625 C22.8676194 109.6995747 16.92206442 108.42856361 11 105 C8.87372486 110.46091471 7.10271176 115.89227047 5.58984375 121.55078125 C5.15307184 123.15171373 4.71622061 124.75262457 4.27929688 126.35351562 C3.6039359 128.84596036 2.93039161 131.33888105 2.25854492 133.83227539 C1.60275906 136.26055811 0.94038725 138.68697194 0.27734375 141.11328125 C0.07833969 141.86015701 -0.12066437 142.60703278 -0.32569885 143.37654114 C-1.23098716 146.68006404 -2.08222701 149.12334051 -4 152 C-5.75906372 152.62651062 -5.75906372 152.62651062 -7.89892578 152.9831543 C-8.6996048 153.12307297 -9.50028381 153.26299164 -10.32522583 153.40715027 C-11.18985443 153.54478287 -12.05448303 153.68241547 -12.9453125 153.82421875 C-13.8303244 153.97534622 -14.7153363 154.12647369 -15.62716675 154.28218079 C-18.45789548 154.76270948 -21.29123006 155.22527936 -24.125 155.6875 C-26.04316697 156.00989052 -27.96113892 156.33344372 -29.87890625 156.65820312 C-34.58377958 157.45231762 -39.29106745 158.23033745 -44 159 C-41.15775609 147.37838323 -38.0802207 135.8342633 -34.88671875 124.3046875 C-34.39456363 122.52228665 -33.90257363 120.7398402 -33.41073608 118.95735168 C-32.10691816 114.23413117 -30.80067467 109.51158499 -29.49379349 104.78921127 C-28.41336489 100.88418508 -27.33419855 96.97881052 -26.25503063 93.07343578 C-23.57912825 83.38976666 -20.90063913 73.70681538 -18.22058392 64.02429485 C-16.62070361 58.24392813 -15.02210509 52.46320905 -13.42480469 46.68212891 C-11.62462883 40.16683655 -9.82241752 33.65211271 -8.01797485 27.13800049 C-7.38338276 24.84630194 -6.74940586 22.55443296 -6.11605835 20.26239014 C-5.25777013 17.15743753 -4.3968834 14.05321839 -3.53515625 10.94921875 C-3.28841156 10.05459427 -3.04166687 9.15996979 -2.78744507 8.23823547 C-1.11451727 2.22903455 -1.11451727 2.22903455 0 0 Z M30 31 C28.7549552 33.74921164 28.00219689 36.57548579 27.24609375 39.4921875 C26.90470116 40.72668137 26.90470116 40.72668137 26.55641174 41.9861145 C25.83431275 44.61172889 25.13563327 47.24292401 24.4375 49.875 C23.9657215 51.6045844 23.49242696 53.33375602 23.01757812 55.0625 C22.09299986 58.43888929 21.18271473 61.81860898 20.28466797 65.20214844 C19.46221377 68.29715915 18.61380379 71.38248105 17.73486328 74.46191406 C17.54199234 75.14875275 17.3491214 75.83559143 17.15040588 76.54324341 C16.63482889 78.37569443 16.11083007 80.2057701 15.58618164 82.03564453 C15.02293253 84.88402881 14.87486956 86.35472596 16 89 C20.26465216 91.94956119 25.0367132 91.55623042 30 91 C40.33084649 88.54175641 46.28798356 82.09115487 51.75 73.3125 C57.51223265 62.93258777 60.16054114 51.88225129 60.25 40.0625 C60.270625 39.38509766 60.29125 38.70769531 60.3125 38.00976562 C60.3520712 32.85067097 59.33094312 29.49297733 57 25 C53.46033319 21.77265673 49.95907891 21.47934736 45.33984375 21.6484375 C38.8473269 22.62394087 34.22868782 26.11918888 30 31 Z "
        fill="currentColor"
        transform={`scale(${scale}) translate(470,196)`}
      />
      <path
        d="M0 0 C0 0.66 0 1.32 0 2 C-2.57750095 3.20183475 -5.16071162 4.38656886 -7.75 5.5625 C-8.47960937 5.90474609 -9.20921875 6.24699219 -9.9609375 6.59960938 C-10.66992188 6.91865234 -11.37890625 7.23769531 -12.109375 7.56640625 C-12.75874023 7.86490479 -13.40810547 8.16340332 -14.07714844 8.47094727 C-18.47974952 9.68227745 -22.14852755 6.92573623 -26 5 C-34.43429958 2.3440929 -43.99014238 3.5693073 -52 7 C-56.26720797 9.63295811 -58.30684836 12.27699807 -60 17 C-61.03776877 23.70752987 -59.61752493 29.30537971 -56 35 C-49.58703956 43.22597029 -40.54675928 48.73417087 -32.05224609 54.57617188 C-16.43853225 65.40881274 -3.04524867 75.81900531 1.75 95 C2.95900712 109.50808539 0.41290226 121.87877459 -8.8984375 133.3359375 C-23.16148936 148.8715293 -46.45004819 156.11353149 -67 157 C-86.27688413 157.76889153 -109.58509305 157.64507597 -125.22265625 144.65234375 C-133.22312468 137.21454562 -136.93251946 130.64051063 -137.4375 119.5625 C-137.09696128 109.51660787 -133.21942758 101.84878732 -126 95 C-124.37458956 93.61667196 -122.72614587 92.25537882 -121 91 C-116.0191816 92.53401631 -112.71535266 95.50357462 -108.875 98.875 C-108.25496094 99.40480469 -107.63492188 99.93460937 -106.99609375 100.48046875 C-103.95775152 103.11369869 -101.23702283 105.61997281 -99 109 C-99.495 110.010625 -99.99 111.02125 -100.5 112.0625 C-102.57558878 116.96484302 -102.69654733 120.99230477 -100.9375 126.0625 C-96.78596082 132.35676907 -91.5784173 135.95945061 -84.25 137.625 C-73.13163521 138.90788825 -63.32072348 137.54626688 -54 131 C-48.88583566 126.50920395 -46.44160236 120.85055718 -45.6796875 114.20703125 C-45.19411239 101.69537936 -49.69639375 93.06369456 -58 84 C-63.65607452 77.92183037 -69.66039386 72.54049869 -76.1328125 67.3515625 C-100.41274589 47.43804765 -100.41274589 47.43804765 -102.37890625 33.26953125 C-102.73764033 25.06493567 -100.39102798 18.58654197 -95.875 11.8125 C-73.35884905 -12.48846779 -27.89404759 -13.94702379 0 0 Z "
        fill="currentColor"
        transform={`scale(${scale}) translate(146,8)`}
      />
      <path
        d="M0 0 C13.86 0 27.72 0 42 0 C39.999375 6.31125 37.99875 12.6225 35.9375 19.125 C34.96828613 22.18974609 34.96828613 22.18974609 33.97949219 25.31640625 C31.54514086 33.01360018 29.11115032 40.70961449 26.578125 48.375 C26.08517944 49.87716064 26.08517944 49.87716064 25.58227539 51.40966797 C25.00670237 53.15633184 24.4231868 54.90040899 23.82983398 56.64111328 C22.32477122 61.2307037 21.62519758 65.10258171 22 70 C22.93597315 72.01951062 22.93597315 72.01951062 25 73 C29.84162966 74.32907481 33.48279184 74.15312791 38.01953125 72.1875 C49.13289929 65.52386315 52.2649567 50.70940742 55.953125 39.1796875 C56.47166046 37.58086227 56.47166046 37.58086227 57.00067139 35.94973755 C58.08849691 32.59299502 59.16958774 29.23413509 60.25 25.875 C61.34590891 22.48056636 62.44323558 19.08659937 63.54217529 15.69314575 C64.22198191 13.59262621 64.8998234 11.49146945 65.57550049 9.38961792 C65.87961853 8.44748444 66.18373657 7.50535095 66.49707031 6.53466797 C66.76400696 5.70482391 67.0309436 4.87497986 67.30596924 4.01998901 C68 2 68 2 69 0 C82.53 0 96.06 0 110 0 C109.33273281 4.67087036 108.76909908 8.19317732 107.33276367 12.51586914 C106.99074921 13.55521103 106.64873474 14.59455292 106.2963562 15.66539001 C105.92398834 16.77741287 105.55162048 17.88943573 105.16796875 19.03515625 C104.77997101 20.21062515 104.39197327 21.38609406 103.99221802 22.59718323 C102.94558894 25.76591865 101.89412508 28.93296618 100.84030533 32.09931183 C98.87146094 38.02023778 96.91652878 43.94578046 94.9609375 49.87109375 C94.63732585 50.85051941 94.63732585 50.85051941 94.30717659 51.84973145 C91.57706322 60.11706201 88.90689995 68.39946986 86.3515625 76.72265625 C86.08457047 77.58856888 85.81757843 78.45448151 85.54249573 79.34663391 C84.34592209 83.23389571 83.16391209 87.12456007 82.0065918 91.02368164 C77.36790886 106.34306222 71.19995075 121.19766971 58 131 C42.64740396 139.06624059 24.38510304 140.29473 7.71875 135.921875 C4.1921441 134.72607185 1.84462084 133.39547018 -1 131 C-1.9590625 130.2575 -1.9590625 130.2575 -2.9375 129.5 C-4 128 -4 128 -3.90234375 126.14453125 C-2.57504334 122.99003806 -0.49590441 121.97710577 2.375 120.1875 C3.35210938 119.56230469 4.32921875 118.93710938 5.3359375 118.29296875 C8 117 8 117 11 118 C11.433125 118.495 11.86625 118.99 12.3125 119.5 C14.86853487 121.77203099 16.59136197 121.93568607 20 122 C23.99727944 121.02811245 27.04684219 119.4473942 29.34423828 115.95874023 C32.4360376 109.58117432 34.76237337 103.15444744 36.8125 96.375 C37.12380859 95.37082031 37.43511719 94.36664063 37.75585938 93.33203125 C38.51163872 90.8902826 39.25952499 88.44642416 40 86 C38.96552734 86.50660156 38.96552734 86.50660156 37.91015625 87.0234375 C36.97042969 87.46945313 36.03070312 87.91546875 35.0625 88.375 C34.14597656 88.81585938 33.22945312 89.25671875 32.28515625 89.7109375 C20.74866339 94.23774207 5.61246472 95.30858442 -6.25 91.4375 C-12.28232411 88.74907839 -17.46205652 85.01180598 -20.5 79.0625 C-21.6302642 72.1396318 -20.87925023 66.27001715 -19.01953125 59.60546875 C-18.80053665 58.79845016 -18.58154205 57.99143158 -18.35591125 57.15995789 C-15.19071689 45.75811404 -11.40708515 34.54229349 -7.6875 23.3125 C-6.9389387 21.03858074 -6.19088868 18.7644931 -5.44335938 16.49023438 C-3.63570572 10.99120383 -1.81768167 5.49576372 0 0 Z "
        fill="currentColor"
        transform={`scale(${scale}) translate(727,54)`}
      />
      <path
        d="M0 0 C0.61875 0.598125 1.2375 1.19625 1.875 1.8125 C2.535 -0.1675 3.195 -2.1475 3.875 -4.1875 C17.405 -4.1875 30.935 -4.1875 44.875 -4.1875 C44.20798586 1.1486131 43.55625991 5.49455101 42.125 10.54467773 C41.86384399 11.47571823 41.86384399 11.47571823 41.59741211 12.42556763 C41.22290295 13.75808679 40.84580217 15.08987988 40.46630859 16.42098808 C39.86378491 18.53545138 39.26885334 20.65192577 38.67578125 22.76905823 C37.20199471 28.02482296 35.71686512 33.27736278 34.22949219 38.52929688 C32.96999849 42.97718262 31.71617277 47.42658525 30.47021484 51.87828255 C29.88803288 53.94972196 29.29767987 56.01871511 28.70703125 58.0877533 C25.05826029 69.82695084 25.05826029 69.82695084 25.875 81.8125 C31.69425596 83.47514456 37.61755028 83.73220174 43.25 81.4375 C44.11625 80.90125 44.9825 80.365 45.875 79.8125 C47.20833333 79.14583333 48.54166667 78.47916667 49.875 77.8125 C51.94409157 81.95068315 53.17633753 86.27564518 51.875 90.8125 C49.56763525 93.42472382 46.8793677 95.08318182 43.875 96.8125 C43.22789062 97.19277344 42.58078125 97.57304687 41.9140625 97.96484375 C28.85013572 105.03002864 13.92878277 106.72153703 -0.32421875 102.7734375 C-6.8961926 100.51861802 -9.90802591 97.70379904 -13.0625 91.5 C-13.76820358 89.9456368 -14.46215278 88.38561667 -15.125 86.8125 C-15.49109375 87.23660156 -15.8571875 87.66070312 -16.234375 88.09765625 C-26.51854055 99.23883559 -40.24781038 104.43085871 -55.1875 105.0625 C-66.70181613 104.88505335 -76.22324483 101.90947037 -84.875 94.4375 C-93.07630519 84.86931061 -93.91510211 74.26486573 -93.32470703 62.12841797 C-91.57241423 41.80781955 -79.87632995 23.68964827 -65.3125 10.125 C-49.25385791 -3.33125345 -18.93016386 -13.2511147 0 0 Z M-31.77734375 18.3125 C-44.31925253 31.6682764 -51.98623425 51.02842584 -51.41796875 69.40234375 C-50.88171727 73.81390591 -49.42521603 77.18722997 -46.625 80.6875 C-42.70713588 83.62589809 -37.77358988 83.35584167 -33.125 82.8125 C-25.84625229 80.38625076 -19.85757949 75.7208823 -16.1401062 68.98321533 C-14.09961228 64.61979854 -12.87570186 59.99134651 -11.56640625 55.3671875 C-11.09810646 53.73512863 -11.09810646 53.73512863 -10.62034607 52.07009888 C-9.96755171 49.78041498 -9.31986103 47.48927053 -8.67700195 45.19677734 C-7.68703044 41.6858347 -6.66553268 38.1850477 -5.64257812 34.68359375 C-5.01107013 32.45367651 -4.38144682 30.22322449 -3.75390625 27.9921875 C-3.4447377 26.94626434 -3.13556915 25.90034119 -2.81703186 24.82272339 C-1.16038318 19.24450457 -1.16038318 19.24450457 -2.33569336 13.73876953 C-5.84308858 9.96289994 -7.55144783 9.21475824 -12.6328125 8.80078125 C-20.78871544 8.83913189 -26.06299021 12.80128422 -31.77734375 18.3125 Z "
        fill="currentColor"
        transform={`scale(${scale}) translate(520.125,58.1875)`}
      />
      <path
        d="M0 0 C-1.52311453 8.75104029 -3.93185676 17.23710708 -6.359375 25.76953125 C-6.79087114 27.29667683 -7.22203707 28.82391575 -7.65289307 30.35124207 C-8.78482594 34.36028713 -9.92134941 38.36801654 -11.05883789 42.37548828 C-11.97078551 45.59098145 -12.87971775 48.8073227 -13.78838348 52.02374458 C-14.67648014 55.16722522 -15.56554964 58.31043041 -16.4546051 61.45363998 C-16.89032066 62.99474604 -17.32573641 64.53593688 -17.760849 66.07721329 C-19.79535958 73.28368103 -21.83410032 80.48689619 -23.97851562 87.66162109 C-24.26454651 88.62742599 -24.55057739 89.5932309 -24.84527588 90.58830261 C-25.35035556 92.28603275 -25.86383747 93.98130348 -26.38861084 95.67304993 C-28.03029777 101.2118244 -29.20630179 106.86361534 -27.0625 112.4375 C-23.71793148 114.97126403 -20.11746172 115.09103232 -16 115 C-12.57174316 114.1950483 -12.57174316 114.1950483 -10 113 C-9.94474774 114.35368041 -9.90665631 115.70806235 -9.875 117.0625 C-9.85179687 117.81660156 -9.82859375 118.57070313 -9.8046875 119.34765625 C-10.07087091 122.96242697 -10.53501639 125.65534166 -12 129 C-14.76711826 130.38355913 -16.81569711 131.1598294 -19.75 131.875 C-20.80574219 132.17277344 -20.80574219 132.17277344 -21.8828125 132.4765625 C-33.6906578 135.72481734 -45.98327573 137.11475003 -57.00390625 130.86328125 C-60.68290961 128.42853372 -63.11996057 126.09185053 -65 122 C-65 121.34 -65 120.68 -65 120 C-65.90621094 120.67546875 -66.81242188 121.3509375 -67.74609375 122.046875 C-82.93380339 133.22770334 -97.00696789 138.28471887 -116.0078125 135.5703125 C-123.14699907 133.75754099 -129.30484111 129.779796 -133.6015625 123.75390625 C-140.44059681 111.89558068 -141.14727283 97.75575652 -137.61523438 84.59448242 C-131.64013562 65.46705318 -119.41464358 49.59031623 -101.77441406 39.90625 C-91.81180024 34.81802456 -82.73284494 32.80311771 -71.6875 32.6875 C-70.77548828 32.65849609 -69.86347656 32.62949219 -68.92382812 32.59960938 C-61.12972324 32.52697614 -56.37579912 34.74946726 -50 39 C-49.56917114 37.37203491 -49.56917114 37.37203491 -49.12963867 35.71118164 C-48.06329956 31.69532436 -46.98038395 27.68409656 -45.89233398 23.67407227 C-45.42325811 21.9360381 -44.95872087 20.19677252 -44.4987793 18.45629883 C-43.83784052 15.95839134 -43.16084115 13.46533035 -42.48046875 10.97265625 C-42.17558784 9.7992141 -42.17558784 9.7992141 -41.86454773 8.60206604 C-41.33830829 6.70565626 -40.6799932 4.84686417 -40 3 C-36.53650223 1.84550074 -33.53056452 1.68643616 -29.8828125 1.46484375 C-29.18864227 1.42186661 -28.49447205 1.37888947 -27.77926636 1.33460999 C-26.31178129 1.24452872 -24.84417557 1.15639483 -23.37646484 1.07006836 C-21.14001615 0.93838416 -18.90399383 0.80078332 -16.66796875 0.66210938 C-5.38367758 -0.02471029 -5.38367758 -0.02471029 0 0 Z M-84 57 C-93.64791897 70.29191715 -100.97372835 86.84315555 -99.9375 103.625 C-99.23758971 107.91104859 -98.13700704 110.86299296 -95 114 C-90.45258101 116.12334394 -86.2561109 116.39637153 -81.4375 115.0625 C-75.88824545 112.83115639 -70.60920175 109.51932849 -68.05657959 103.93673706 C-65.67788062 97.96528438 -63.65578028 91.96884972 -61.87890625 85.79296875 C-61.61109848 84.86454666 -61.34329071 83.93612457 -61.06736755 82.97956848 C-60.51055416 81.0368507 -59.95695999 79.09320752 -59.40649414 77.14868164 C-58.55816241 74.17228141 -57.68246438 71.20473721 -56.80664062 68.23632812 C-56.26651944 66.33902756 -55.72804823 64.44125633 -55.19140625 62.54296875 C-54.79327477 61.21787544 -54.79327477 61.21787544 -54.38710022 59.86601257 C-52.96370542 54.88496435 -52.96370542 54.88496435 -54.25366211 49.9855957 C-57.1118175 46.73585744 -58.93401377 46.10249868 -63.25 45.6875 C-72.16941669 46.43078472 -78.05676696 50.3710093 -84 57 Z "
        fill="currentColor"
        transform={`scale(${scale}) translate(868,181)`}
      />
      <path
        d="M0 0 C1.28194036 4.4255815 0.62355941 7.39535852 -0.62036133 11.78808594 C-0.80622614 12.45618821 -0.99209095 13.12429049 -1.18358803 13.81263828 C-1.80594995 16.0396351 -2.44400077 18.26182114 -3.08203125 20.484375 C-3.52900072 22.07224364 -3.97494611 23.66040085 -4.41993713 25.24882507 C-5.37414464 28.64704147 -6.33517569 32.04322323 -7.30169678 35.43795776 C-8.81740733 40.76172873 -10.31854816 46.08953263 -11.81689453 51.41821289 C-13.34997316 56.8679083 -14.88397966 62.3173319 -16.42327881 67.76527405 C-21.06998511 84.21267955 -25.64232652 100.68018613 -30.19198608 117.15466309 C-31.7003716 122.61648911 -33.21198477 128.07742085 -34.72346497 133.53839111 C-36.14959878 138.69208862 -37.57470694 143.84606991 -39 149 C-51.87 149 -64.74 149 -78 149 C-77.3207813 144.24546908 -76.59905391 140.12353871 -75.34179688 135.56152344 C-75.00474731 134.33044861 -74.66769775 133.09937378 -74.32043457 131.83099365 C-73.95332199 130.5070887 -73.586091 129.18321659 -73.21875 127.859375 C-72.84107962 126.48660776 -72.46376607 125.11374231 -72.08679199 123.74078369 C-71.09806113 120.14391089 -70.10406506 116.54851325 -69.10906982 112.95336914 C-68.29673306 110.01466213 -67.48822087 107.07490944 -66.67989349 104.1350975 C-65.71498765 100.62616259 -64.74834898 97.11770602 -63.78125 93.609375 C-63.59719101 92.94145683 -63.41313202 92.27353867 -63.22349548 91.58538055 C-62.70266202 89.69696292 -62.18046417 87.80892175 -61.65820312 85.92089844 C-61.21305359 84.31042633 -61.21305359 84.31042633 -60.75891113 82.66741943 C-60.21762081 80.76489321 -59.6255079 78.87652369 -59 77 C-66.25979291 74.14535089 -73.37850538 72.41182864 -81.0625 71.1875 C-81.89563721 71.05174561 -82.72877441 70.91599121 -83.5871582 70.77612305 C-88.33497472 70.01550229 -88.33497472 70.01550229 -93 71 C-94.66741352 73.4595548 -94.66741352 73.4595548 -96.22265625 76.5625 C-96.52450836 77.13718521 -96.82636047 77.71187042 -97.13735962 78.30397034 C-98.12472206 80.19655463 -99.09484067 82.09727375 -100.0625 84 C-100.39537018 84.6478244 -100.72824036 85.2956488 -101.07119751 85.96310425 C-109.50959709 102.42496664 -116.27692033 119.41355368 -122 137 C-125.60901119 135.31500747 -127.76125368 133.35426483 -130.5 130.4375 C-135.89529579 124.90530864 -141.71847211 120.46830334 -148 116 C-147.39153588 111.12277975 -145.3014076 107.32178567 -143 103.0625 C-142.59990723 102.31540771 -142.19981445 101.56831543 -141.78759766 100.79858398 C-135.94441902 90.04114814 -129.12706536 79.94580825 -122 70 C-124.39611639 70.31044024 -126.79187835 70.62328358 -129.1875 70.9375 C-129.86103516 71.02451172 -130.53457031 71.11152344 -131.22851562 71.20117188 C-134.85081166 71.67825477 -138.42803585 72.23012035 -142 73 C-141.68643562 67.04227683 -138.96212226 61.4106644 -135 57 C-131.50757006 55.90062601 -128.48392099 55.99814938 -124.8984375 56.359375 C-116.71295624 57.30424723 -116.71295624 57.30424723 -109.09277344 54.84130859 C-105.10804029 51.41019853 -102.06037475 47.24482392 -99 43 C-97.93208786 41.69555469 -96.85242451 40.40041134 -95.75 39.125 C-95.30269531 38.59648437 -94.85539062 38.06796875 -94.39453125 37.5234375 C-92.22088327 35.14886408 -89.82801449 33.07998106 -87.37109375 31.00390625 C-85.61171835 29.51698767 -83.87858451 27.99890144 -82.16015625 26.46484375 C-59.80410877 6.67083107 -30.37707673 -8.5483231 0 0 Z M-43 14 C-60.62455025 25.06657807 -76.86669418 41.10189219 -86 60 C-81.5866445 61.03552346 -77.1688874 62.05086639 -72.75 63.0625 C-71.49574219 63.35705078 -70.24148437 63.65160156 -68.94921875 63.95507812 C-67.14130859 64.3659668 -67.14130859 64.3659668 -65.296875 64.78515625 C-64.18666992 65.04176025 -63.07646484 65.29836426 -61.93261719 65.56274414 C-58.79974695 66.221194 -58.79974695 66.221194 -55 65 C-50.38 48.5 -45.76 32 -41 15 C-41.66 14.67 -42.32 14.34 -43 14 Z "
        fill="currentColor"
        transform={`scale(${scale}) translate(148,163)`}
      />
      <path
        d="M0 0 C6.9234514 6.83881263 9.79968685 14.77145399 9.9777832 24.390625 C9.93127641 47.0682216 3.81110259 68.37755337 -11.984375 85.2578125 C-25.29998278 98.03563321 -41.28732511 103.14661721 -59.46484375 102.953125 C-60.55861328 102.96472656 -61.65238281 102.97632813 -62.77929688 102.98828125 C-74.65139997 102.94590611 -86.84322948 100.22612109 -96.01953125 92.203125 C-104.03231267 82.78697508 -104.23037265 71.26780515 -103.40234375 59.578125 C-101.04916435 40.68839531 -90.11333638 20.63875661 -75.40234375 8.578125 C-56.1643707 -5.32266744 -21.1468679 -16.59754171 0 0 Z M-39.7265625 13.74609375 C-53.26643885 28.54842944 -61.6455693 49.58498509 -61.40234375 69.578125 C-60.88743997 74.51841802 -60.37196822 78.31185632 -56.40234375 81.578125 C-51.2089596 83.30925305 -45.39410623 83.65789843 -40.18359375 81.77734375 C-27.35042081 74.36771414 -20.50635934 60.2057071 -16.56640625 46.48828125 C-11.54926378 28.93159706 -11.54926378 28.93159706 -15.40234375 11.578125 C-17.74318278 9.11408392 -19.5478546 7.93416214 -22.65234375 6.640625 C-29.26884914 6.49024988 -34.97910398 9.26056398 -39.7265625 13.74609375 Z "
        fill="currentColor"
        transform={`scale(${scale}) translate(257.40234375,58.421875)`}
      />
      <path
        d="M0 0 C-2.92770284 12.03050457 -6.15834398 23.96135531 -9.5 35.8828125 C-10.02296454 37.75449737 -10.54574726 39.62623305 -11.06835938 41.49801636 C-12.43262272 46.38219904 -13.79954208 51.26563451 -15.16699219 56.14892578 C-16.27634478 60.11229274 -17.38376547 64.07619823 -18.49108887 68.04013252 C-19.82672911 72.82121136 -21.1632475 77.60204454 -22.5 82.3828125 C-22.74903076 83.2735358 -22.99806152 84.16425911 -23.25463867 85.08197403 C-23.73885592 86.81335351 -24.22331108 88.54466648 -24.70802307 90.27590752 C-25.1668985 91.91504039 -25.62519836 93.55433452 -26.08287048 95.19380379 C-27.10442535 98.84513894 -28.13873259 102.49130048 -29.21508789 106.12689209 C-29.57852295 107.36102844 -29.94195801 108.59516479 -30.31640625 109.86669922 C-30.63295166 110.92235077 -30.94949707 111.97800232 -31.27563477 113.06564331 C-32.31111214 117.26029514 -32.97722184 121.73896062 -32 126 C-27.32339845 129.11773437 -22.48013849 128.47683424 -17 128 C-14.11757394 127.24100501 -11.71951871 126.25516248 -9 125 C-8.63705686 127.1026706 -8.28493028 129.20721057 -7.9375 131.3125 C-7.74027344 132.48425781 -7.54304687 133.65601563 -7.33984375 134.86328125 C-7 138 -7 138 -8 141 C-22.14419742 149.99342032 -38.52267412 153.22040235 -55.05859375 150.49609375 C-61.82910644 148.69268474 -66.86922746 145.59148012 -71.3125 140.1875 C-76.15492419 131.04069874 -75.5722284 121.98214337 -73.1171875 112.203125 C-72.9004538 111.3178009 -72.68372009 110.43247681 -72.4604187 109.52032471 C-68.90507093 95.29448034 -64.80405135 81.20493756 -60.79345703 67.10235596 C-59.68618912 63.20578796 -58.5834363 59.30794327 -57.48046875 55.41015625 C-56.19240308 50.85913836 -54.90400491 46.30821675 -53.61334229 41.75793457 C-50.0461043 29.18017288 -46.51276355 16.59309382 -43 4 C-37.84094601 3.42617829 -32.68144259 2.85664863 -27.52148438 2.29101562 C-25.76777492 2.0981723 -24.01419183 1.904176 -22.26074219 1.70898438 C-19.73405121 1.42792227 -17.2069283 1.15106908 -14.6796875 0.875 C-13.90132538 0.78750488 -13.12296326 0.70000977 -12.3210144 0.60986328 C-11.58069977 0.52978027 -10.84038513 0.44969727 -10.07763672 0.3671875 C-9.43365936 0.29612793 -8.78968201 0.22506836 -8.12619019 0.15185547 C-5.41403146 -0.04185069 -2.71802315 -0.02272246 0 0 Z "
        fill="currentColor"
        transform={`scale(${scale}) translate(719,14)`}
      />
      <path
        d="M0 0 C-1.74253364 9.86529474 -4.52564556 19.41769682 -7.234375 29.05078125 C-7.75553312 30.91423678 -8.27638094 32.77777912 -8.79693604 34.6414032 C-10.16569331 39.53816822 -11.53895033 44.43366044 -12.91308594 49.32891846 C-14.01861919 53.27012192 -15.12100939 57.21220094 -16.22320175 61.15433979 C-18.2911072 68.55020328 -20.35977957 75.94586072 -22.4348793 83.33970928 C-22.90625799 85.02021673 -23.37645883 86.70105505 -23.84542465 88.38223743 C-25.08832958 92.82284537 -26.36738888 97.24957287 -27.69348145 101.66610718 C-27.97188999 102.60514232 -28.25029854 103.54417746 -28.53714371 104.51166821 C-29.06910919 106.30187407 -29.60951759 108.08960241 -30.1600914 109.87417316 C-31.70555056 115.1066784 -32.36352185 119.53923357 -32 125 C-31.05144132 127.11038651 -31.05144132 127.11038651 -29 128 C-22.23029244 128.92190944 -15.84823011 128.79344656 -10 125 C-9.34 125 -8.68 125 -8 125 C-7.505 132.425 -7.505 132.425 -7 140 C-21.86195901 149.61656171 -37.48632064 152.88001028 -55.015625 150.609375 C-61.59788116 148.99485934 -66.71914165 145.21756969 -71 140 C-77.09662186 128.04338316 -74.12465208 116.39696933 -70.703125 104.0859375 C-70.3490697 102.78856414 -69.99565185 101.49101669 -69.64280701 100.1933136 C-68.65672236 96.57908118 -67.6577498 92.96853042 -66.65502548 89.3588829 C-65.97864696 86.92310328 -65.30450602 84.48671259 -64.63076782 82.05020142 C-61.65073595 71.27981067 -58.64438052 60.5169195 -55.62475586 49.75756836 C-54.30089921 45.04012126 -52.98196335 40.32131241 -51.66411686 35.60218334 C-50.6395681 31.93602335 -49.61200922 28.27071232 -48.58355522 24.60564613 C-48.09486672 22.86234432 -47.60724441 21.11874326 -47.12071419 19.37483788 C-46.44959126 16.97059347 -45.77431025 14.56755635 -45.09790039 12.16479492 C-44.89899704 11.44876099 -44.70009369 10.73272705 -44.49516296 9.99499512 C-43.11419424 5.11419424 -43.11419424 5.11419424 -42 4 C-39.41135534 3.62552044 -36.83759267 3.30765677 -34.23828125 3.02734375 C-33.45486862 2.93997452 -32.67145599 2.85260529 -31.86430359 2.7625885 C-30.20086636 2.57813188 -28.53718572 2.39585948 -26.87329102 2.21557617 C-24.33998548 1.94048465 -21.80768023 1.65732127 -19.27539062 1.37304688 C-17.65890782 1.19482517 -16.04237285 1.01707592 -14.42578125 0.83984375 C-13.67242996 0.75548569 -12.91907867 0.67112762 -12.14289856 0.58421326 C-8.07493895 0.14820843 -4.09086456 -0.08681629 0 0 Z "
        fill="currentColor"
        transform={`scale(${scale}) translate(647,14)`}
      />
      <path
        d="M0 0 C0.96236572 -0.01417969 1.92473145 -0.02835938 2.91625977 -0.04296875 C10.56334874 0.00952092 17.66191405 1.1225108 24.25 5.1875 C29.58750821 10.84849356 29.84422111 16.45398835 29.65625 23.90234375 C28.62404043 34.33000636 22.03018499 41.44437163 14.25 47.9375 C1.02874894 57.78023716 -14.25455303 62.66329732 -30.6875 62.375 C-30.59974337 64.58404631 -30.49155633 66.79228593 -30.375 69 C-30.31699219 70.22976563 -30.25898438 71.45953125 -30.19921875 72.7265625 C-29.65876271 76.57989027 -28.74680032 79.08785394 -26.6875 82.375 C-17.43020464 87.61497851 -6.39168778 86.15014551 3.5 83.4375 C6.79504425 82.47486404 10.05620255 81.46043248 13.3125 80.375 C15.3125 83.375 15.3125 83.375 15.3125 85.625 C12.99762901 91.99089522 8.68472498 95.46544504 2.8125 98.625 C-14.62561078 106.61746744 -36.03177027 106.90959512 -54.07421875 100.53125 C-61.07243652 97.43870424 -66.11322403 92.47554489 -69.125 85.4375 C-74.27249494 69.12595758 -69.49908989 51.71699478 -61.88818359 37.03881836 C-52.43476724 19.61245896 -39.96522687 9.09455101 -21.578125 2.2109375 C-14.48495299 0.20308193 -7.32362044 0.08385158 0 0 Z M-11.1875 18.3125 C-18.78751246 26.45041289 -27.6875 39.8920091 -27.6875 51.375 C-17.10618758 51.32818003 -8.44847743 47.33752703 -0.75 40.125 C4.69529791 34.21437663 8.4908748 28.17466433 8.875 20 C8.69423113 16.71517142 8.43058418 15.55212627 6.5625 12.75 C0.35735596 8.95796753 -6.53775905 14.03516393 -11.1875 18.3125 Z "
        fill="currentColor"
        transform={`scale(${scale}) translate(415.6875,197.625)`}
      />
      <path
        d="M0 0 C4.24718155 3.52205299 5.63995487 6.47910053 6.375 11.875 C7.01703384 21.310106 4.24054226 28.59885834 -1.4375 36.125 C-12.95249579 48.5206838 -30.32584723 56.56131139 -47.2734375 57.23828125 C-49.6660437 57.24833422 -52.0468614 57.21655637 -54.4375 57.125 C-54.34974337 59.33404631 -54.24155633 61.54228593 -54.125 63.75 C-54.06699219 64.97976563 -54.00898437 66.20953125 -53.94921875 67.4765625 C-53.39348979 71.43878269 -52.72225697 73.8368343 -50.4375 77.125 C-45.50282788 79.99244461 -40.92700791 80.63995039 -35.3125 80.5625 C-34.57620361 80.55927734 -33.83990723 80.55605469 -33.08129883 80.55273438 C-27.04260872 80.40119559 -21.75319752 79.09416887 -16.07421875 77 C-13.4375 76.125 -13.4375 76.125 -9.4375 76.125 C-8.5 78.625 -8.5 78.625 -8.4375 82.125 C-13.89756826 91.16053232 -22.52579226 95.46148318 -32.45996094 97.94262695 C-47.61356981 101.15031264 -67.79749904 101.72694961 -81.375 93.375 C-89.2052098 87.49875081 -92.86366865 81.89315984 -94.4375 72.125 C-96.42670335 54.66421506 -89.40478666 35.06257468 -79 21.125 C-77.83975624 19.7678823 -76.65134083 18.43439851 -75.4375 17.125 C-74.74914062 16.35800781 -74.06078125 15.59101563 -73.3515625 14.80078125 C-68.26985938 9.40704373 -63.00296119 5.53318527 -56.4375 2.125 C-55.37789062 1.55652344 -55.37789062 1.55652344 -54.296875 0.9765625 C-38.43104228 -6.83882917 -15.75913267 -8.59589054 0 0 Z M-41.2890625 21.625 C-46.16327312 29.21980248 -50.32553154 38.14585471 -51.4375 47.125 C-39.60620341 45.79769787 -29.56789543 40.93753745 -21.4375 32.125 C-17.47626446 26.77091107 -15.2953905 22.37910642 -15.25 15.625 C-15.23582031 14.6659375 -15.22164062 13.706875 -15.20703125 12.71875 C-15.24994889 9.88753861 -15.24994889 9.88753861 -17.4375 7.125 C-28.6195864 5.35940741 -35.24137602 13.13701897 -41.2890625 21.625 Z "
        fill="currentColor"
        transform={`scale(${scale}) translate(732.4375,212.875)`}
      />
      <path
        d="M0 0 C3.08369186 2.47730641 4.71118318 4.89686228 6 8.6875 C6.04192417 11.02045667 6.04687785 13.35463761 6 15.6875 C3.2944888 16.53108924 0.58619457 17.36254771 -2.125 18.1875 C-2.88554687 18.42597656 -3.64609375 18.66445312 -4.4296875 18.91015625 C-8.74974618 20.21362223 -12.43306391 20.979317 -17 20.6875 C-16.95359375 20.08421875 -16.9071875 19.4809375 -16.859375 18.859375 C-16.62247757 13.73646114 -16.62247757 13.73646114 -18.5 9.0625 C-21.45634206 7.43651187 -23.54989087 7.3331656 -26.85546875 7.96484375 C-38.45920147 11.87502691 -44.1334453 24.34469443 -49.21508789 34.56713867 C-54.20923869 45.00833213 -57.16965615 55.56552788 -57.25 67.125 C-57.270625 67.86298828 -57.29125 68.60097656 -57.3125 69.36132812 C-57.34675909 74.179012 -56.85176481 77.61954137 -54 81.6875 C-49.08960651 85.18541585 -44.31127845 85.19396514 -38.5 85.125 C-37.17585083 85.11472778 -37.17585083 85.11472778 -35.82495117 85.10424805 C-25.18128008 84.84615521 -15.77633536 82.3223559 -6.671875 76.640625 C-5 75.6875 -5 75.6875 -3 75.6875 C-2.01562721 79.79354814 -1.47709164 83.47782365 -2 87.6875 C-4.69216379 91.14885344 -8.10187233 92.79203542 -12 94.6875 C-13.051875 95.21988281 -14.10375 95.75226563 -15.1875 96.30078125 C-28.65842245 102.58409346 -41.50822904 105.02608036 -56.3125 105.125 C-57.9217334 105.14022705 -57.9217334 105.14022705 -59.56347656 105.15576172 C-71.50063986 105.02541127 -83.71411178 102.77175391 -92.75 94.5 C-99.54070587 87.27518508 -101.34548155 78.367526 -101.21484375 68.71484375 C-99.61222147 46.13243892 -90.02463757 24.87156054 -72.8125 9.9375 C-63.68985318 2.8180078 -53.34834107 -2.00736822 -42 -4.3125 C-41.11699219 -4.49554688 -40.23398438 -4.67859375 -39.32421875 -4.8671875 C-26.50834923 -6.58400198 -11.2381344 -7.16835733 0 0 Z "
        fill="currentColor"
        transform={`scale(${scale}) translate(236,200.3125)`}
      />
      <path
        d="M0 0 C4.38131947 4.50523558 5.69716986 7.99854326 5.80859375 14.23828125 C-9.93628097 19.79408991 -9.93628097 19.79408991 -17.19140625 20.23828125 C-17.24039063 19.55121094 -17.289375 18.86414063 -17.33984375 18.15625 C-17.45199219 16.80466797 -17.45199219 16.80466797 -17.56640625 15.42578125 C-17.67082031 14.08580078 -17.67082031 14.08580078 -17.77734375 12.71875 C-18.05785661 9.99429626 -18.05785661 9.99429626 -20.19140625 7.23828125 C-25.88111958 6.4534932 -29.49535926 7.21235749 -34.19140625 10.5234375 C-47.26053387 21.7291934 -56.04411751 42.3636283 -58.19140625 59.23828125 C-58.33015832 61.7358185 -58.41090378 64.23707873 -58.44140625 66.73828125 C-58.48007812 68.6409375 -58.48007812 68.6409375 -58.51953125 70.58203125 C-58.16547889 74.52718611 -57.26474302 76.88828364 -55.19140625 80.23828125 C-48.20520737 85.43314708 -39.53286919 84.97660283 -31.19140625 84.23828125 C-22.96471166 82.93932947 -15.31136966 80.23129273 -8.046875 76.19140625 C-6.19140625 75.23828125 -6.19140625 75.23828125 -4.19140625 75.23828125 C-2.79346459 79.43210622 -1.87586982 82.90857619 -3.19140625 87.23828125 C-16.97472487 100.8294022 -40.55582046 104.49667665 -59.10913086 104.48706055 C-71.64230026 104.30945727 -83.15171791 102.15801917 -92.94140625 93.92578125 C-102.2227527 82.83972855 -102.09683841 72.24783332 -101.19140625 58.23828125 C-99.32042633 42.943276 -90.86287347 27.96666583 -81.19140625 16.23828125 C-80.41603516 15.29275391 -80.41603516 15.29275391 -79.625 14.328125 C-67.29561569 0.76271219 -49.10826633 -5.49829298 -31.22949219 -6.67578125 C-20.57460197 -7.12505309 -8.65477078 -6.9577569 0 0 Z "
        fill="currentColor"
        transform={`scale(${scale}) translate(343.19140625,203.76171875)`}
      />
      <path
        d="M0 0 C3.89549538 4.26069807 5.18442819 8.52846674 5 14.1875 C-10.74487472 19.74330866 -10.74487472 19.74330866 -18 20.1875 C-17.938125 18.970625 -17.87625 17.75375 -17.8125 16.5 C-17.8472548 12.58660948 -18.11849433 10.06900567 -21 7.1875 C-26.11293294 6.21780582 -29.11616462 6.89469877 -33.5625 9.5625 C-47.55164445 19.91063425 -55.82212115 42.20345792 -58.61328125 58.84375 C-59.51416444 66.63320466 -59.61431187 73.08350771 -56 80.1875 C-49.21411225 85.58141078 -40.23275649 84.73825427 -32 84.1875 C-23.65438718 83.07349286 -16.77910804 80.41702463 -9.4609375 76.296875 C-7 75.1875 -7 75.1875 -4 76.1875 C-3.505 81.6325 -3.505 81.6325 -3 87.1875 C-26.55242201 101.22836696 -51.41008757 108.47182676 -78.7265625 102.15234375 C-87.58990071 99.5398801 -93.753622 94.83538906 -99 87.1875 C-104.96840346 75.87156727 -102.90352759 60.09512723 -99.390625 48.2421875 C-95.56894929 36.5775206 -90.20512959 26.35793895 -82 17.1875 C-81.37480469 16.36636719 -80.74960937 15.54523438 -80.10546875 14.69921875 C-68.78783202 1.19784506 -51.02785793 -4.73996155 -34.0625 -6.5625 C-21.91579973 -7.31565952 -10.5840218 -6.39451317 0 0 Z "
        fill="currentColor"
        transform={`scale(${scale}) translate(368,57.8125)`}
      />
      <path
        d="M0 0 C-0.70695441 6.8604449 -2.66382686 13.32410188 -4.5625 19.9375 C-4.89185547 21.09830078 -5.22121094 22.25910156 -5.56054688 23.45507812 C-6.36965254 26.30453721 -7.18427815 29.15242789 -8 32 C-3.05 32 1.9 32 7 32 C6.34 34.97 5.68 37.94 5 41 C-0.28 41 -5.56 41 -11 41 C-11.26353271 42.40862305 -11.52706543 43.81724609 -11.79858398 45.26855469 C-12.98081962 51.16943565 -14.56793243 56.91980221 -16.22265625 62.703125 C-16.52819931 63.78454773 -16.83374237 64.86597046 -17.14854431 65.98016357 C-18.11626093 69.40447487 -19.08884643 72.82737244 -20.0625 76.25 C-21.03950296 79.68696975 -22.01532611 83.12425003 -22.98716736 86.56268311 C-23.58953583 88.6938022 -24.19484044 90.82409419 -24.80348206 92.95343018 C-27.99622755 101.99548422 -27.99622755 101.99548422 -27 111 C-23.07441189 113.30916948 -19.47042831 113.37884986 -15 113 C-12.25348991 112.17048314 -9.64314384 111.10897122 -7 110 C-6.01 109.67 -5.02 109.34 -4 109 C-2.49952688 122.10413193 -2.49952688 122.10413193 -5.734375 126.19140625 C-8.42662787 127.87626384 -11.00049979 128.95454682 -14 130 C-15.02738281 130.40605469 -16.05476562 130.81210937 -17.11328125 131.23046875 C-28.97051863 135.31292533 -44.04314218 136.52352573 -55.76171875 131.40234375 C-61.31852674 127.92085323 -64.93229102 123.1799419 -67 117 C-67.9892498 106.78163928 -66.41609441 97.76975418 -63.53515625 87.953125 C-63.1823912 86.69409363 -62.82962616 85.43506226 -62.46617126 84.13787842 C-61.54170633 80.83961611 -60.59420822 77.54843904 -59.64129639 74.25830078 C-58.67126715 70.89250495 -57.7245899 67.52015415 -56.77539062 64.1484375 C-51.57917772 45.73753315 -51.57917772 45.73753315 -50 41 C-52.64 41 -55.28 41 -58 41 C-57.34 38.03 -56.68 35.06 -56 32 C-53.03 32 -50.06 32 -47 32 C-46.6596875 30.081875 -46.6596875 30.081875 -46.3125 28.125 C-44.69668819 19.96338122 -42.2722322 11.99723278 -40 4 C-34.78578524 3.4282876 -29.57134689 2.8586762 -24.35668945 2.29101562 C-22.58253772 2.09758392 -20.80844861 1.90357695 -19.03442383 1.70898438 C-16.48535117 1.42947767 -13.93606091 1.15203649 -11.38671875 0.875 C-10.59287277 0.78750488 -9.79902679 0.70000977 -8.98112488 0.60986328 C-5.97097138 0.28434171 -3.03025271 0 0 0 Z "
        fill="currentColor"
        transform={`scale(${scale}) translate(637,193)`}
      />
      <path
        d="M0 0 C1.25159912 0.00523682 2.50319824 0.01047363 3.79272461 0.01586914 C4.78942421 0.01799156 4.78942421 0.01799156 5.80625916 0.02015686 C7.93590735 0.02577021 10.06545175 0.03832485 12.19506836 0.05102539 C13.63582205 0.05603868 15.07657739 0.06060188 16.51733398 0.06469727 C20.05577938 0.07574394 23.59416375 0.09301747 27.13256836 0.11352539 C25.80461572 7.88834253 24.15493314 15.54349085 22.31225586 23.21118164 C21.77139123 25.49947496 21.23104208 27.78789018 20.69116211 30.07641602 C19.849158 33.63441178 19.00385222 37.19149166 18.1496582 40.74658203 C17.31869732 44.21162679 16.501918 47.67977391 15.68725586 51.14868164 C15.43104462 52.19999771 15.17483337 53.25131378 14.91085815 54.33448792 C12.71320572 63.64511874 12.71320572 63.64511874 13.13256836 73.11352539 C16.41573796 75.30230513 16.84028239 75.32045327 20.50756836 74.80102539 C21.29776367 74.69274414 22.08795898 74.58446289 22.90209961 74.47290039 C25.327783 74.08207224 27.73559594 73.65477723 30.13256836 73.11352539 C34.18774077 78.52042194 34.18774077 78.52042194 33.94506836 81.12915039 C31.72202094 86.55851619 25.33927314 89.94120011 20.22631836 92.30102539 C11.32193294 95.75645854 1.29658357 96.70106571 -7.75805664 93.28149414 C-13.0375342 90.35822786 -16.09929281 85.96986089 -18.36743164 80.48852539 C-20.30944358 69.63426522 -17.23133797 57.95447548 -14.74243164 47.43774414 C-14.43155376 46.09270314 -14.12151185 44.74746867 -13.81225586 43.40205383 C-13.16975919 40.61659187 -12.52049522 37.83283691 -11.86547852 35.05029297 C-11.02497846 31.47930019 -10.19726043 27.90549606 -9.37387085 24.33052349 C-8.73712591 21.56838176 -8.09628731 18.8072045 -7.45391846 16.04636574 C-6.99811994 14.08719434 -6.54385007 12.12766751 -6.08959961 10.1681366 C-5.8126123 8.99213394 -5.535625 7.81613129 -5.25024414 6.60449219 C-5.00677246 5.56528122 -4.76330078 4.52607025 -4.51245117 3.45536804 C-3.58603957 0.09188818 -3.58796192 0.14205213 0 0 Z "
        fill="currentColor"
        transform={`scale(${scale}) translate(391.867431640625,62.886474609375)`}
      />
      <path
        d="M0 0 C3.67914062 3.13809053 5.77116884 5.51511908 7.0625 10.25 C7.13600421 14.43974004 6.43849744 16.34225384 4.125 19.8125 C0.49865898 23.16686544 -2.10570867 24.63904007 -7.0625 25.125 C-11.75152317 24.74065384 -15.06145142 23.56339684 -18.875 20.8125 C-21.59390069 17.26969 -22.0866493 14.59310207 -21.8125 10.25 C-21.17628656 6.14227411 -19.95443022 3.71596277 -16.875 0.8125 C-11.73650899 -2.30572959 -5.48148915 -2.26409335 0 0 Z "
        fill="currentColor"
        transform={`scale(${scale}) translate(416.875,27.1875)`}
      />
    </svg>
  );
};
