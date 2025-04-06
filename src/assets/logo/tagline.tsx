import { LogoProps } from '@/types/interface';
import { cn } from '@/utils/cn';

export const TagLine = ({ className }: LogoProps) => {
  return (
    <svg
      width="298"
      height="16"
      viewBox="0 0 298 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-block', className)}
    >
      <path
        d="M20.8154 1.0957V1.4751C20.5557 1.49561 20.3369 1.56738 20.1592 1.69043C19.9814 1.81348 19.8242 2.00146 19.6875 2.25439C19.6465 2.33643 19.4312 2.86621 19.0415 3.84375L14.6836 15.3179H14.2837L10.8384 6.35596L7.04443 15.3179H6.66504L2.0918 3.9668C1.62695 2.8252 1.30225 2.13477 1.11768 1.89551C0.933105 1.65625 0.62207 1.51611 0.18457 1.4751V1.0957H6.21387V1.4751C5.72852 1.48877 5.40381 1.56396 5.23975 1.70068C5.08252 1.83057 5.00391 1.99463 5.00391 2.19287C5.00391 2.45264 5.17139 3.00293 5.50635 3.84375L8.23389 10.5908L10.418 5.32031L9.84375 3.84375C9.5293 3.03711 9.28662 2.50049 9.11572 2.23389C8.94482 1.96045 8.74658 1.76562 8.521 1.64941C8.30225 1.5332 7.97754 1.4751 7.54688 1.4751V1.0957H14.2837V1.4751C13.812 1.48193 13.4736 1.51953 13.2686 1.58789C13.125 1.63574 13.0122 1.71777 12.9302 1.83398C12.8481 1.94336 12.8071 2.06982 12.8071 2.21338C12.8071 2.37061 12.9609 2.85254 13.2686 3.65918L15.8013 10.2422L18.0674 4.28467C18.3066 3.66943 18.4536 3.24902 18.5083 3.02344C18.563 2.79785 18.5903 2.58936 18.5903 2.39795C18.5903 2.11768 18.4946 1.89893 18.3032 1.7417C18.1118 1.57764 17.7461 1.48877 17.2061 1.4751V1.0957H20.8154ZM29.2417 1.89551V7.55566H29.5185C30.4004 7.55566 31.0395 7.27881 31.436 6.7251C31.8325 6.17139 32.0854 5.35449 32.1948 4.27441H32.5845V11.5547H32.1948C32.1128 10.7617 31.9385 10.1123 31.6719 9.60645C31.4121 9.10059 31.1079 8.76221 30.7593 8.59131C30.4106 8.41357 29.9048 8.32471 29.2417 8.32471V12.2417C29.2417 13.0073 29.2724 13.4756 29.334 13.6465C29.4023 13.8174 29.5254 13.9575 29.7031 14.0669C29.8808 14.1763 30.1679 14.231 30.5644 14.231H31.395C32.6938 14.231 33.7329 13.9302 34.5122 13.3286C35.2983 12.7271 35.8623 11.811 36.2041 10.5806H36.5835L35.958 15H23.9404V14.6206H24.4018C24.8052 14.6206 25.1299 14.5488 25.376 14.4053C25.5537 14.3096 25.6904 14.1455 25.7861 13.9131C25.8613 13.749 25.8989 13.3184 25.8989 12.6211V3.47461C25.8989 2.8457 25.8818 2.45947 25.8476 2.31592C25.7793 2.07666 25.6528 1.89209 25.4682 1.76221C25.2085 1.5708 24.853 1.4751 24.4018 1.4751H23.9404V1.0957H35.5786V5.20752H35.1889C34.9907 4.20264 34.7104 3.48145 34.3481 3.04395C33.9927 2.60645 33.4868 2.28516 32.8305 2.08008C32.4477 1.95703 31.73 1.89551 30.6772 1.89551H29.2417ZM53.4872 8.7041V12.5596C53.4872 13.3115 53.5317 13.7866 53.6205 13.9849C53.7163 14.1763 53.8803 14.3301 54.1127 14.4463C54.352 14.5625 54.7861 14.6206 55.415 14.6206V15H48.35V14.6206C48.9926 14.6206 49.4267 14.5625 49.6523 14.4463C49.8847 14.3232 50.0454 14.166 50.1342 13.9746C50.2299 13.7832 50.2778 13.3115 50.2778 12.5596V3.53613C50.2778 2.78418 50.2299 2.3125 50.1342 2.12109C50.0454 1.92285 49.8847 1.76562 49.6523 1.64941C49.4199 1.5332 48.9858 1.4751 48.35 1.4751V1.0957H54.4101C56.4062 1.0957 57.8383 1.45117 58.7065 2.16211C59.5746 2.87305 60.0087 3.76172 60.0087 4.82812C60.0087 5.73047 59.7285 6.50293 59.1679 7.14551C58.6074 7.78809 57.8349 8.22559 56.8505 8.45801C56.1874 8.62207 55.0663 8.7041 53.4872 8.7041ZM53.4872 1.89551V7.9043C53.7128 7.91797 53.8837 7.9248 53.9999 7.9248C54.8339 7.9248 55.4765 7.67871 55.9277 7.18652C56.3788 6.6875 56.6044 5.91846 56.6044 4.87939C56.6044 3.84717 56.3788 3.0918 55.9277 2.61328C55.4765 2.13477 54.8032 1.89551 53.9077 1.89551H53.4872ZM68.7529 8.66309V12.5596C68.7529 13.3115 68.7973 13.7866 68.8862 13.9849C68.9819 14.1763 69.1459 14.3301 69.3783 14.4463C69.6108 14.5625 70.0448 14.6206 70.6806 14.6206V15H63.5644V14.6206C64.207 14.6206 64.641 14.5625 64.8666 14.4463C65.099 14.3232 65.2597 14.166 65.3486 13.9746C65.4443 13.7832 65.4921 13.3115 65.4921 12.5596V3.53613C65.4921 2.78418 65.4443 2.3125 65.3486 2.12109C65.2597 1.92285 65.099 1.76562 64.8666 1.64941C64.6342 1.5332 64.2001 1.4751 63.5644 1.4751V1.0957H70.0243C71.706 1.0957 72.9364 1.21191 73.7157 1.44434C74.495 1.67676 75.1308 2.10742 75.623 2.73633C76.1152 3.3584 76.3613 4.08984 76.3613 4.93066C76.3613 5.95605 75.9921 6.80371 75.2538 7.47363C74.7822 7.89746 74.1225 8.21533 73.2748 8.42725L76.6176 13.1338C77.0551 13.7422 77.3661 14.1216 77.5507 14.272C77.831 14.4839 78.1557 14.6001 78.5248 14.6206V15H74.1464L69.6655 8.66309H68.7529ZM68.7529 1.84424V7.93506H69.3373C70.2875 7.93506 70.9985 7.84961 71.4701 7.67871C71.9418 7.50098 72.311 7.18652 72.5776 6.73535C72.851 6.27734 72.9877 5.68262 72.9877 4.95117C72.9877 3.8916 72.7382 3.10889 72.2392 2.60303C71.747 2.09717 70.9506 1.84424 69.85 1.84424H68.7529ZM86.5922 1.89551V7.55566H86.869C87.7509 7.55566 88.39 7.27881 88.7865 6.7251C89.183 6.17139 89.4359 5.35449 89.5453 4.27441H89.935V11.5547H89.5453C89.4633 10.7617 89.289 10.1123 89.0224 9.60645C88.7626 9.10059 88.4584 8.76221 88.1098 8.59131C87.7611 8.41357 87.2553 8.32471 86.5922 8.32471V12.2417C86.5922 13.0073 86.6229 13.4756 86.6845 13.6465C86.7528 13.8174 86.8759 13.9575 87.0536 14.0669C87.2313 14.1763 87.5185 14.231 87.9149 14.231H88.7455C90.0443 14.231 91.0834 13.9302 91.8627 13.3286C92.6488 12.7271 93.2128 11.811 93.5546 10.5806H93.934L93.3085 15H81.2909V14.6206H81.7523C82.1557 14.6206 82.4804 14.5488 82.7265 14.4053C82.9042 14.3096 83.0409 14.1455 83.1366 13.9131C83.2118 13.749 83.2494 13.3184 83.2494 12.6211V3.47461C83.2494 2.8457 83.2323 2.45947 83.1981 2.31592C83.1298 2.07666 83.0033 1.89209 82.8187 1.76221C82.559 1.5708 82.2035 1.4751 81.7523 1.4751H81.2909V1.0957H92.9291V5.20752H92.5395C92.3412 4.20264 92.0609 3.48145 91.6986 3.04395C91.3432 2.60645 90.8373 2.28516 90.1811 2.08008C89.7982 1.95703 89.0805 1.89551 88.0277 1.89551H86.5922ZM110.645 1.0957V4.85889H110.276C110.058 3.99072 109.815 3.36865 109.548 2.99268C109.282 2.60986 108.916 2.30566 108.451 2.08008C108.191 1.95703 107.737 1.89551 107.087 1.89551H106.052V12.6211C106.052 13.332 106.089 13.7764 106.164 13.9541C106.246 14.1318 106.4 14.2891 106.626 14.4258C106.858 14.5557 107.173 14.6206 107.569 14.6206H108.031V15H100.75V14.6206H101.212C101.615 14.6206 101.94 14.5488 102.186 14.4053C102.364 14.3096 102.504 14.1455 102.606 13.9131C102.682 13.749 102.719 13.3184 102.719 12.6211V1.89551H101.714C100.778 1.89551 100.098 2.09375 99.6737 2.49023C99.079 3.04395 98.703 3.8335 98.5458 4.85889H98.1561V1.0957H110.645ZM119.646 1.89551V7.55566H119.923C120.805 7.55566 121.444 7.27881 121.84 6.7251C122.237 6.17139 122.49 5.35449 122.599 4.27441H122.989V11.5547H122.599C122.517 10.7617 122.343 10.1123 122.076 9.60645C121.816 9.10059 121.512 8.76221 121.163 8.59131C120.815 8.41357 120.309 8.32471 119.646 8.32471V12.2417C119.646 13.0073 119.677 13.4756 119.738 13.6465C119.807 13.8174 119.93 13.9575 120.107 14.0669C120.285 14.1763 120.572 14.231 120.969 14.231H121.799C123.098 14.231 124.137 13.9302 124.916 13.3286C125.702 12.7271 126.266 11.811 126.608 10.5806H126.988L126.362 15H114.345V14.6206H114.806C115.209 14.6206 115.534 14.5488 115.78 14.4053C115.958 14.3096 116.095 14.1455 116.19 13.9131C116.265 13.749 116.303 13.3184 116.303 12.6211V3.47461C116.303 2.8457 116.286 2.45947 116.252 2.31592C116.183 2.07666 116.057 1.89209 115.872 1.76221C115.613 1.5708 115.257 1.4751 114.806 1.4751H114.345V1.0957H125.983V5.20752H125.593C125.395 4.20264 125.115 3.48145 124.752 3.04395C124.397 2.60645 123.891 2.28516 123.235 2.08008C122.852 1.95703 122.134 1.89551 121.081 1.89551H119.646ZM135.681 1.0957L142.54 9.71924V3.74121C142.54 2.90723 142.421 2.34326 142.181 2.04932C141.853 1.65283 141.303 1.46143 140.531 1.4751V1.0957H145.124V1.4751C144.536 1.55029 144.14 1.64941 143.935 1.77246C143.737 1.88867 143.579 2.0835 143.463 2.35693C143.354 2.62354 143.299 3.08496 143.299 3.74121V15.3179H142.951L133.548 3.74121V12.5801C133.548 13.3799 133.729 13.9199 134.091 14.2002C134.46 14.4805 134.881 14.6206 135.352 14.6206H135.681V15H130.748V14.6206C131.514 14.6138 132.047 14.4565 132.348 14.1489C132.649 13.8413 132.799 13.3184 132.799 12.5801V2.76709L132.502 2.39795C132.208 2.02881 131.948 1.78613 131.723 1.66992C131.497 1.55371 131.172 1.48877 130.748 1.4751V1.0957H135.681ZM148.424 15V14.6206H148.885C149.288 14.6206 149.596 14.5591 149.808 14.436C150.027 14.3062 150.187 14.1318 150.29 13.9131C150.351 13.7695 150.382 13.3389 150.382 12.6211V3.47461C150.382 2.76367 150.345 2.31934 150.269 2.1416C150.194 1.96387 150.04 1.81006 149.808 1.68018C149.582 1.54346 149.275 1.4751 148.885 1.4751H148.424V1.0957H154.648C156.309 1.0957 157.645 1.32129 158.657 1.77246C159.894 2.32617 160.831 3.16357 161.467 4.28467C162.109 5.40576 162.43 6.67383 162.43 8.08887C162.43 9.06641 162.273 9.96875 161.959 10.7959C161.644 11.6162 161.238 12.2964 160.739 12.8364C160.24 13.3696 159.662 13.8003 159.006 14.1284C158.356 14.4497 157.56 14.6992 156.617 14.877C156.2 14.959 155.543 15 154.648 15H148.424ZM153.725 1.88525V12.7339C153.725 13.3081 153.752 13.6602 153.807 13.79C153.862 13.9199 153.954 14.019 154.084 14.0874C154.268 14.1899 154.535 14.2412 154.884 14.2412C156.025 14.2412 156.897 13.8516 157.498 13.0723C158.319 12.0195 158.729 10.3857 158.729 8.1709C158.729 6.38672 158.449 4.96143 157.888 3.89502C157.444 3.06104 156.873 2.49365 156.176 2.19287C155.683 1.98096 154.867 1.87842 153.725 1.88525ZM194.038 1.0957V1.4751C193.779 1.49561 193.56 1.56738 193.382 1.69043C193.204 1.81348 193.047 2.00146 192.91 2.25439C192.869 2.33643 192.654 2.86621 192.264 3.84375L187.907 15.3179H187.507L184.061 6.35596L180.267 15.3179H179.888L175.315 3.9668C174.85 2.8252 174.525 2.13477 174.341 1.89551C174.156 1.65625 173.845 1.51611 173.408 1.4751V1.0957H179.437V1.4751C178.951 1.48877 178.627 1.56396 178.463 1.70068C178.305 1.83057 178.227 1.99463 178.227 2.19287C178.227 2.45264 178.394 3.00293 178.729 3.84375L181.457 10.5908L183.641 5.32031L183.067 3.84375C182.752 3.03711 182.51 2.50049 182.339 2.23389C182.168 1.96045 181.97 1.76562 181.744 1.64941C181.525 1.5332 181.2 1.4751 180.77 1.4751V1.0957H187.507V1.4751C187.035 1.48193 186.697 1.51953 186.491 1.58789C186.348 1.63574 186.235 1.71777 186.153 1.83398C186.071 1.94336 186.03 2.06982 186.03 2.21338C186.03 2.37061 186.184 2.85254 186.491 3.65918L189.024 10.2422L191.29 4.28467C191.53 3.66943 191.677 3.24902 191.731 3.02344C191.786 2.79785 191.813 2.58936 191.813 2.39795C191.813 2.11768 191.718 1.89893 191.526 1.7417C191.335 1.57764 190.969 1.48877 190.429 1.4751V1.0957H194.038ZM202.465 1.89551V7.55566H202.741C203.623 7.55566 204.262 7.27881 204.659 6.7251C205.055 6.17139 205.308 5.35449 205.418 4.27441H205.807V11.5547H205.418C205.336 10.7617 205.161 10.1123 204.895 9.60645C204.635 9.10059 204.331 8.76221 203.982 8.59131C203.634 8.41357 203.128 8.32471 202.465 8.32471V12.2417C202.465 13.0073 202.495 13.4756 202.557 13.6465C202.625 13.8174 202.748 13.9575 202.926 14.0669C203.104 14.1763 203.391 14.231 203.787 14.231H204.618C205.917 14.231 206.956 13.9302 207.735 13.3286C208.521 12.7271 209.085 11.811 209.427 10.5806H209.806L209.181 15H197.163V14.6206H197.625C198.028 14.6206 198.353 14.5488 198.599 14.4053C198.777 14.3096 198.913 14.1455 199.009 13.9131C199.084 13.749 199.122 13.3184 199.122 12.6211V3.47461C199.122 2.8457 199.105 2.45947 199.071 2.31592C199.002 2.07666 198.876 1.89209 198.691 1.76221C198.431 1.5708 198.076 1.4751 197.625 1.4751H197.163V1.0957H208.802V5.20752H208.412C208.214 4.20264 207.933 3.48145 207.571 3.04395C207.216 2.60645 206.71 2.28516 206.053 2.08008C205.671 1.95703 204.953 1.89551 203.9 1.89551H202.465ZM229.786 6.41748L234.677 12.5391C235.368 13.4004 235.963 13.9849 236.462 14.2925C236.824 14.5112 237.207 14.6206 237.61 14.6206V15H230.371V14.6206C230.829 14.5796 231.123 14.5078 231.253 14.4053C231.389 14.3027 231.458 14.1763 231.458 14.0259C231.458 13.7388 231.143 13.1987 230.514 12.4058L227.325 8.39648L226.813 8.82715V12.6211C226.813 13.3457 226.854 13.7969 226.936 13.9746C227.018 14.1523 227.175 14.3062 227.407 14.436C227.64 14.5591 228.012 14.6206 228.525 14.6206V15H221.511V14.6206H221.973C222.376 14.6206 222.701 14.5488 222.947 14.4053C223.125 14.3096 223.261 14.1455 223.357 13.9131C223.432 13.749 223.47 13.3184 223.47 12.6211V3.47461C223.47 2.76367 223.432 2.31934 223.357 2.1416C223.282 1.96387 223.128 1.81006 222.896 1.68018C222.67 1.54346 222.363 1.4751 221.973 1.4751H221.511V1.0957H228.433V1.4751C227.961 1.4751 227.602 1.54346 227.356 1.68018C227.178 1.77588 227.038 1.93652 226.936 2.16211C226.854 2.33301 226.813 2.77051 226.813 3.47461V7.80176L231.97 3.62842C232.688 3.04736 233.047 2.58252 233.047 2.23389C233.047 1.97412 232.9 1.76904 232.606 1.61865C232.456 1.54346 232.083 1.49561 231.488 1.4751V1.0957H236.913V1.4751C236.427 1.50928 236.045 1.59814 235.764 1.7417C235.491 1.87842 234.855 2.3501 233.857 3.15674L229.786 6.41748ZM245.134 1.0957L251.994 9.71924V3.74121C251.994 2.90723 251.874 2.34326 251.635 2.04932C251.307 1.65283 250.757 1.46143 249.984 1.4751V1.0957H254.578V1.4751C253.99 1.55029 253.593 1.64941 253.388 1.77246C253.19 1.88867 253.033 2.0835 252.917 2.35693C252.807 2.62354 252.753 3.08496 252.753 3.74121V15.3179H252.404L243.001 3.74121V12.5801C243.001 13.3799 243.182 13.9199 243.545 14.2002C243.914 14.4805 244.334 14.6206 244.806 14.6206H245.134V15H240.202V14.6206C240.967 14.6138 241.501 14.4565 241.801 14.1489C242.102 13.8413 242.253 13.3184 242.253 12.5801V2.76709L241.955 2.39795C241.661 2.02881 241.402 1.78613 241.176 1.66992C240.95 1.55371 240.626 1.48877 240.202 1.4751V1.0957H245.134ZM265.711 0.900879C267.926 0.818848 269.724 1.46484 271.105 2.83887C272.492 4.21289 273.186 5.93213 273.186 7.99658C273.186 9.76025 272.67 11.312 271.638 12.6519C270.271 14.4292 268.34 15.3179 265.844 15.3179C263.342 15.3179 261.408 14.4702 260.041 12.7749C258.961 11.4351 258.421 9.8457 258.421 8.00684C258.421 5.94238 259.121 4.22314 260.523 2.84912C261.931 1.46826 263.66 0.818848 265.711 0.900879ZM265.834 1.55713C264.563 1.55713 263.595 2.20654 262.932 3.50537C262.392 4.57178 262.122 6.10303 262.122 8.09912C262.122 10.4712 262.539 12.2246 263.373 13.3594C263.954 14.1523 264.768 14.5488 265.814 14.5488C266.518 14.5488 267.106 14.3779 267.577 14.0361C268.179 13.5986 268.647 12.9014 268.982 11.9443C269.317 10.9805 269.485 9.72607 269.485 8.18115C269.485 6.34229 269.314 4.96826 268.972 4.05908C268.63 3.14307 268.193 2.49707 267.659 2.12109C267.133 1.74512 266.525 1.55713 265.834 1.55713ZM297.28 1.0957V1.4751C297.021 1.49561 296.802 1.56738 296.624 1.69043C296.446 1.81348 296.289 2.00146 296.152 2.25439C296.111 2.33643 295.896 2.86621 295.507 3.84375L291.149 15.3179H290.749L287.303 6.35596L283.509 15.3179H283.13L278.557 3.9668C278.092 2.8252 277.767 2.13477 277.583 1.89551C277.398 1.65625 277.087 1.51611 276.65 1.4751V1.0957H282.679V1.4751C282.194 1.48877 281.869 1.56396 281.705 1.70068C281.548 1.83057 281.469 1.99463 281.469 2.19287C281.469 2.45264 281.636 3.00293 281.971 3.84375L284.699 10.5908L286.883 5.32031L286.309 3.84375C285.994 3.03711 285.752 2.50049 285.581 2.23389C285.41 1.96045 285.212 1.76562 284.986 1.64941C284.767 1.5332 284.443 1.4751 284.012 1.4751V1.0957H290.749V1.4751C290.277 1.48193 289.939 1.51953 289.734 1.58789C289.59 1.63574 289.477 1.71777 289.395 1.83398C289.313 1.94336 289.272 2.06982 289.272 2.21338C289.272 2.37061 289.426 2.85254 289.734 3.65918L292.266 10.2422L294.532 4.28467C294.772 3.66943 294.919 3.24902 294.973 3.02344C295.028 2.79785 295.055 2.58936 295.055 2.39795C295.055 2.11768 294.96 1.89893 294.768 1.7417C294.577 1.57764 294.211 1.48877 293.671 1.4751V1.0957H297.28Z"
        fill="currentColor"
      />
    </svg>
  );
};
