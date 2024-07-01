function Logo({ width = 70, height = 38 }) {
  const w = width + "";
  const h = height + "";
  const vB = `0 0 ${w} ${h}`;
  return (
    <svg
      width={w}
      height={h}
      viewBox={vB}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.3986 22.2845C11.3986 21.5645 11.2986 20.9712 11.0986 20.5045C10.8986 20.0245 10.6119 19.6712 10.2386 19.4445C9.87859 19.2045 9.44526 19.0912 8.93859 19.1045H7.97859V28.4845C7.97859 28.8445 7.97193 29.1912 7.95859 29.5245C7.94526 29.8579 7.92526 30.1112 7.89859 30.2845C8.12526 30.2579 8.41193 30.2445 8.75859 30.2445C9.11859 30.2312 9.36526 30.2245 9.49859 30.2245V31.7645H3.65859V30.4445C3.96526 30.4312 4.21859 30.3912 4.41859 30.3245C4.63193 30.2579 4.79193 30.1045 4.89859 29.8645C5.01859 29.6245 5.07859 29.2379 5.07859 28.7045V19.1245H4.15859C3.39859 19.1379 2.79859 19.3979 2.35859 19.9045C1.91859 20.4112 1.69859 21.2045 1.69859 22.2845H0.378594L0.478594 17.7645H12.5986L12.7186 22.2845H11.3986ZM13.8083 30.4645C14.1816 30.4645 14.4483 30.3912 14.6083 30.2445C14.7683 30.0979 14.8683 29.8912 14.9083 29.6245C14.9616 29.3445 14.9883 29.0312 14.9883 28.6845V25.3245C14.9883 25.0845 14.9949 24.8179 15.0083 24.5245C15.0216 24.2179 15.0416 23.9179 15.0683 23.6245C14.8549 23.6379 14.6016 23.6512 14.3083 23.6645C14.0283 23.6645 13.8149 23.6712 13.6683 23.6845V22.1645H14.4683C14.9883 22.1645 15.4616 22.0979 15.8883 21.9645C16.3283 21.8312 16.6149 21.6979 16.7483 21.5645H17.7283C17.7549 21.6979 17.7749 21.9512 17.7883 22.3245C17.8016 22.6845 17.8083 23.0045 17.8083 23.2845C18.1683 22.8445 18.5083 22.4912 18.8283 22.2245C19.1483 21.9579 19.4616 21.7645 19.7683 21.6445C20.0883 21.5112 20.4083 21.4445 20.7283 21.4445C21.1949 21.4445 21.6016 21.5779 21.9483 21.8445C22.2949 22.0979 22.4683 22.5179 22.4683 23.1045C22.4683 23.3045 22.4216 23.5179 22.3283 23.7445C22.2349 23.9579 22.0883 24.1379 21.8883 24.2845C21.6883 24.4312 21.4149 24.5045 21.0683 24.5045C20.8016 24.5045 20.5283 24.4245 20.2483 24.2645C19.9683 24.1045 19.8083 23.7979 19.7683 23.3445C19.5016 23.3445 19.2349 23.4579 18.9683 23.6845C18.7016 23.8979 18.4616 24.1579 18.2483 24.4645C18.0483 24.7579 17.9083 25.0312 17.8283 25.2845V28.5445C17.8283 28.7312 17.8216 28.9979 17.8083 29.3445C17.7949 29.6779 17.7749 29.9979 17.7483 30.3045C17.9616 30.2779 18.1949 30.2645 18.4483 30.2645C18.7149 30.2512 18.9149 30.2445 19.0483 30.2445V31.7645H13.8083V30.4645ZM23.4177 30.4645C23.791 30.4645 24.0577 30.3912 24.2177 30.2445C24.3777 30.0979 24.4777 29.8912 24.5177 29.6245C24.571 29.3445 24.5977 29.0312 24.5977 28.6845V25.3645C24.5977 25.1245 24.6043 24.8512 24.6177 24.5445C24.631 24.2245 24.651 23.9179 24.6777 23.6245C24.4643 23.6379 24.211 23.6512 23.9177 23.6645C23.6377 23.6645 23.4243 23.6712 23.2777 23.6845V22.1645C23.891 22.1645 24.411 22.1312 24.8377 22.0645C25.2643 21.9979 25.5977 21.9179 25.8377 21.8245C26.091 21.7312 26.2643 21.6445 26.3577 21.5645H27.4377V28.5445C27.4377 28.7312 27.431 28.9979 27.4177 29.3445C27.4043 29.6779 27.3843 29.9979 27.3577 30.3045C27.571 30.2779 27.8043 30.2645 28.0577 30.2645C28.3243 30.2512 28.5243 30.2445 28.6577 30.2445V31.7645H23.4177V30.4645ZM25.9177 19.9845C25.4643 19.9845 25.091 19.8245 24.7977 19.5045C24.5043 19.1845 24.3577 18.7979 24.3577 18.3445C24.3577 17.8912 24.511 17.5045 24.8177 17.1845C25.1243 16.8645 25.4843 16.7045 25.8977 16.7045C26.3243 16.7045 26.6777 16.8645 26.9577 17.1845C27.251 17.5045 27.3977 17.8912 27.3977 18.3445C27.3977 18.7979 27.2643 19.1845 26.9977 19.5045C26.731 19.8245 26.371 19.9845 25.9177 19.9845ZM29.7606 36.8645V35.5645C30.134 35.5645 30.4006 35.4912 30.5606 35.3445C30.734 35.1979 30.8406 34.9845 30.8806 34.7045C30.934 34.4379 30.9606 34.1312 30.9606 33.7845V25.3245C30.9606 25.0845 30.9673 24.8179 30.9806 24.5245C30.994 24.2179 31.014 23.9179 31.0406 23.6245C30.8273 23.6379 30.574 23.6512 30.2806 23.6645C29.9873 23.6645 29.7673 23.6712 29.6206 23.6845V22.1645C30.2473 22.1645 30.7673 22.1312 31.1806 22.0645C31.6073 21.9979 31.9406 21.9179 32.1806 21.8245C32.434 21.7312 32.6073 21.6445 32.7006 21.5645H33.6806C33.7073 21.6979 33.7273 21.8645 33.7406 22.0645C33.754 22.2512 33.7673 22.4045 33.7806 22.5245C34.2473 22.1245 34.7073 21.8445 35.1606 21.6845C35.6273 21.5245 36.0673 21.4445 36.4806 21.4445C37.2806 21.4445 37.9806 21.6512 38.5806 22.0645C39.194 22.4779 39.6673 23.0645 40.0006 23.8245C40.3473 24.5845 40.5206 25.4779 40.5206 26.5045C40.5206 27.5712 40.314 28.5312 39.9006 29.3845C39.4873 30.2245 38.9073 30.8845 38.1606 31.3645C37.4273 31.8445 36.5606 32.0845 35.5606 32.0845C35.2006 32.0845 34.874 32.0445 34.5806 31.9645C34.3006 31.8979 34.034 31.8179 33.7806 31.7245V33.6445C33.7806 33.8312 33.774 34.0912 33.7606 34.4245C33.7606 34.7712 33.7473 35.0979 33.7206 35.4045C33.934 35.3779 34.1673 35.3579 34.4206 35.3445C34.674 35.3445 34.8673 35.3445 35.0006 35.3445V36.8645H29.7606ZM35.2406 30.5845C35.854 30.5712 36.3273 30.3912 36.6606 30.0445C37.0073 29.6845 37.2473 29.2179 37.3806 28.6445C37.514 28.0712 37.5806 27.4579 37.5806 26.8045C37.5806 26.1912 37.5073 25.6112 37.3606 25.0645C37.214 24.5179 36.9806 24.0779 36.6606 23.7445C36.3406 23.3979 35.9206 23.2312 35.4006 23.2445C35.0673 23.2579 34.7606 23.3445 34.4806 23.5045C34.2006 23.6512 33.9673 23.8579 33.7806 24.1245C33.7806 24.5379 33.7806 24.9512 33.7806 25.3645C33.7806 25.7645 33.7806 26.1645 33.7806 26.5645C33.7806 26.9645 33.7806 27.3712 33.7806 27.7845C33.7806 28.1845 33.7806 28.5912 33.7806 29.0045C33.7806 29.4045 33.7806 29.8112 33.7806 30.2245C33.9273 30.3179 34.134 30.4045 34.4006 30.4845C34.6673 30.5645 34.9473 30.5979 35.2406 30.5845ZM41.6445 30.4445C41.9512 30.4312 42.2045 30.3912 42.4045 30.3245C42.6179 30.2579 42.7779 30.1045 42.8845 29.8645C43.0045 29.6245 43.0645 29.2379 43.0645 28.7045V21.0445C43.0645 20.6845 43.0712 20.3379 43.0845 20.0045C43.1112 19.6712 43.1312 19.4179 43.1445 19.2445C42.9312 19.2579 42.6645 19.2712 42.3445 19.2845C42.0245 19.2845 41.7912 19.2912 41.6445 19.3045V17.7645C42.5912 17.7512 43.5379 17.7445 44.4845 17.7445C45.4312 17.7445 46.3779 17.7379 47.3245 17.7245C48.4979 17.7112 49.5179 17.8645 50.3845 18.1845C51.2645 18.5045 51.9379 18.9979 52.4045 19.6645C52.8845 20.3312 53.1112 21.1979 53.0845 22.2645C53.0712 22.7979 52.9445 23.3245 52.7045 23.8445C52.4645 24.3512 52.1112 24.8179 51.6445 25.2445C51.1779 25.6579 50.5912 25.9979 49.8845 26.2645C49.1779 26.5312 48.3512 26.6779 47.4045 26.7045C47.1112 26.7179 46.8512 26.7245 46.6245 26.7245C46.4112 26.7245 46.1912 26.7179 45.9645 26.7045V28.4645C45.9645 28.8379 45.9579 29.1912 45.9445 29.5245C45.9312 29.8579 45.9112 30.1112 45.8845 30.2845C46.0312 30.2712 46.2179 30.2645 46.4445 30.2645C46.6712 30.2512 46.8912 30.2445 47.1045 30.2445C47.3312 30.2312 47.4912 30.2245 47.5845 30.2245V31.7645H41.6445V30.4445ZM45.9645 25.2045C46.1112 25.2179 46.2579 25.2312 46.4045 25.2445C46.5512 25.2579 46.7045 25.2645 46.8645 25.2645C47.5979 25.2645 48.1912 25.1445 48.6445 24.9045C49.1112 24.6512 49.4512 24.2912 49.6645 23.8245C49.8779 23.3445 49.9845 22.7645 49.9845 22.0845C49.9845 21.4179 49.8912 20.8845 49.7045 20.4845C49.5312 20.0845 49.3045 19.7912 49.0245 19.6045C48.7445 19.4045 48.4512 19.2779 48.1445 19.2245C47.8379 19.1579 47.5579 19.1245 47.3045 19.1245C47.0245 19.1245 46.7845 19.1579 46.5845 19.2245C46.3845 19.2912 46.2312 19.4379 46.1245 19.6645C46.0179 19.8912 45.9645 20.2379 45.9645 20.7045V25.2045ZM59.6027 31.7645C59.576 31.5779 59.556 31.4245 59.5427 31.3045C59.5427 31.1712 59.536 31.0179 59.5227 30.8445C59.0693 31.2979 58.5893 31.6179 58.0827 31.8045C57.576 31.9912 57.0627 32.0845 56.5427 32.0845C55.6893 32.0845 55.0227 31.8312 54.5427 31.3245C54.0627 30.8179 53.8227 30.1845 53.8227 29.4245C53.8227 28.7845 53.9827 28.2379 54.3027 27.7845C54.636 27.3312 55.0693 26.9645 55.6027 26.6845C56.1493 26.3912 56.7493 26.1712 57.4027 26.0245C58.0693 25.8645 58.736 25.7712 59.4027 25.7445V24.7045C59.4027 24.3579 59.356 24.0445 59.2627 23.7645C59.1827 23.4845 59.036 23.2645 58.8227 23.1045C58.6227 22.9445 58.336 22.8712 57.9627 22.8845C57.7093 22.8979 57.4627 22.9512 57.2227 23.0445C56.9827 23.1379 56.776 23.2712 56.6027 23.4445C56.7093 23.5645 56.776 23.6979 56.8027 23.8445C56.8293 23.9779 56.8427 24.0979 56.8427 24.2045C56.8427 24.4712 56.736 24.7512 56.5227 25.0445C56.3093 25.3245 55.9693 25.4579 55.5027 25.4445C55.1027 25.4312 54.796 25.2912 54.5827 25.0245C54.3693 24.7579 54.2627 24.4445 54.2627 24.0845C54.2627 23.5512 54.4493 23.0912 54.8227 22.7045C55.2093 22.3045 55.7227 21.9979 56.3627 21.7845C57.0027 21.5579 57.7093 21.4445 58.4827 21.4445C59.656 21.4445 60.5627 21.7512 61.2027 22.3645C61.856 22.9645 62.1827 23.9312 62.1827 25.2645C62.1827 25.7179 62.1827 26.1045 62.1827 26.4245C62.1827 26.7445 62.176 27.0645 62.1627 27.3845C62.1627 27.7045 62.1627 28.0912 62.1627 28.5445C62.1627 28.7312 62.156 28.9979 62.1427 29.3445C62.1293 29.6779 62.1093 29.9979 62.0827 30.3045C62.3093 30.2779 62.5493 30.2645 62.8027 30.2645C63.056 30.2512 63.2493 30.2445 63.3827 30.2445V31.7645H59.6027ZM59.3827 27.1645C59.0093 27.2045 58.656 27.2712 58.3227 27.3645C57.9893 27.4579 57.696 27.5845 57.4427 27.7445C57.2027 27.9045 57.0093 28.0979 56.8627 28.3245C56.7293 28.5512 56.6627 28.8045 56.6627 29.0845C56.676 29.4579 56.796 29.7245 57.0227 29.8845C57.2493 30.0445 57.5093 30.1245 57.8027 30.1245C58.1093 30.1245 58.396 30.0579 58.6627 29.9245C58.9293 29.7912 59.1693 29.6179 59.3827 29.4045C59.3827 29.2712 59.3827 29.1445 59.3827 29.0245C59.3827 28.8912 59.3827 28.7579 59.3827 28.6245C59.3827 28.3845 59.3827 28.1445 59.3827 27.9045C59.3827 27.6512 59.3827 27.4045 59.3827 27.1645ZM64.2109 30.4645C64.5843 30.4645 64.8509 30.3912 65.0109 30.2445C65.1843 30.0979 65.2909 29.8912 65.3309 29.6245C65.3709 29.3445 65.3909 29.0312 65.3909 28.6845V20.4645C65.3909 20.2245 65.3976 19.9512 65.4109 19.6445C65.4243 19.3245 65.4443 19.0179 65.4709 18.7245C65.2576 18.7379 65.0043 18.7512 64.7109 18.7645C64.4309 18.7645 64.2176 18.7712 64.0709 18.7845V17.2645C64.6976 17.2645 65.2176 17.2312 65.6309 17.1645C66.0576 17.0979 66.3909 17.0179 66.6309 16.9245C66.8843 16.8312 67.0576 16.7445 67.1509 16.6645H68.2309V28.5445C68.2309 28.7312 68.2243 28.9979 68.2109 29.3445C68.1976 29.6779 68.1776 29.9979 68.1509 30.3045C68.3776 30.2779 68.6176 30.2645 68.8709 30.2645C69.1243 30.2512 69.3176 30.2445 69.4509 30.2445V31.7645H64.2109V30.4645Z"
        fill="white"
      />
      <path
        d="M1.5 12.2645H31C31.1667 10.4312 30.8 5.86448 28 2.26448C24.5 -2.23552 37.5 6.26448 39 12.2645H68"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default Logo;
