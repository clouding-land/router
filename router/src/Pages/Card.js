import * as React from "react";
import '../App.css'
import Setting from './Setting'
import {Link} from 'react-router-dom'
import { AiFillContacts } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";
import { BsFillArchiveFill } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import { FaDatabase } from "react-icons/fa";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard() {
  return (
    <Card>
      <Card className="icons">
        <ul>
          <li>
            <RxDashboard />
          </li>
          <li>
            <AiFillContacts />
          </li>
          <li>
            <BsFillArchiveFill />
          </li>
          <li>
            <FaDatabase />
          </li>
          <li className="selected">
          <Link to={"/dashboard/setting"}></Link>
          <button className="button1">
          <Link to={"/dashboard/setting"}><AiFillSetting /></Link></button>
            
          </li>
        
        </ul>
      </Card>
      <Card className="card">
        <CardMedia>
          <h2>Welcome to Dashboard</h2>
        </CardMedia>
        <CardContent>
          <Card className="avatar">
            <Typography>
              <img src="data:image/jpeg;base64,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" />
              <h3>Samsitha Banu</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                libero lacus, euismod quis mauris eu, tincidunt ultrices tellus.
              </p>
            </Typography>
          </Card>
        </CardContent>
        <CardContent>
          <Card className="avatar">
            <Typography>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADgCAMAAADCMfHtAAABU1BMVEX///8wntMdGDjd5u3YjGjIeViyYUTekGoxotjbjmkAADQundMcACkxodcbACMdEjMamdHNfFnBcU4Ql9AcACYABzUVFDcdFDVWrNkcCy4ACzXHcUve6vL2+/0cBisPEjcAAB/l7PEuj8HQh2aoWTru8van0OmQxeRVrNnO5fMeIkJCLj8sg7LD3/Dn8vlwt94lVHooapQgL1AiRWh5UE21dl6obloqd6NMNEGBUEkAACa9dFOBvuG12O0mXoUkHDovIjtqR0mXY1XFgGPJw8ilbFmKVUsfKUqmUCu9Zj62b1XPpZbZ09QQBjAhN1kjRmlfQEY4KD01HTNLLTk4OFG1sbihnadZXHB8fo2sfG+Mh5Lv4d6Gb3M4NU3iq5LsxrcAABjmtqLQjnHBi3n46+ju1s+cVUF/Rz+ITECdhoVOTmLRr6Rtb3/GztfVwr22vcdnhJ8C2YHqAAAPv0lEQVR4nO2d+VfiWBbHCRggRJTFREEwIiPihlUqFriUIl1Wl0qVTk9ZNV0zvVhW93TXMvP//zQvG2R5ebkvBIIz+fY5fboJSz7e++69b00kEipUqFChQoUKFSpUqFChQoUKFSpUqMekRmn9pFarrcmq1U5O1kuNoG/JLzW2a8cLTCaP/jEK/X+eWTiubT9q0Mb2Wl0G43mewQm9LqMurG2vBn2rHlTePk7KcFg0CyjCTB5vl4O+ZRo1avUMjM5IuVB7JB6L8PJUdAPKfL02+f66vZDPeKDTlcnvbAeNQFJjLZP3Yj2TJfP82qQasrQzlPkGjMiQpaBhMFpfGNp8Bsj8wqQxlvzkm0DGxo7PfCrjzqRkj/LaCPhUxrWg2RSdZHyJL1hl+JOg8SKNBU/ZHSrUHAN21RrcQdNJo9Jp4Af5fC1AvkY9D6Zb2Xr6ZG83WpieXoru7j1/tsIk07AP5xcCqwBOYAZEdM/eROemC7Oz81FF87OFpbnZvacrySTkC/hMQJXcDsSA6eTK092ZpdmoXbOFmZcIEmLJ/HEAfI0kIISmk1t704V5DJ5mzML03haEMVMfu6duAwyI+HbncNYzWXJuF8LIZ9bHC1gDACZXXs85m89gyLnXK0nXFj3mmHrsDpjmn8y42a9vx5nnaXczjrMxLrg3weRWtADkk1XYWHEPq5mdcQHWAYDPZyAOanDVmacAxIWx8JXd20ya2Zum4pM198bdUTP1MYzIQQD5lzQeqquwy7sy8snJANyAhhizZjcgiKO2IgQwStcEKRHrowWsu1eiXi2oIrp+PWqLowSEpInXZMBTMuJusEnjGAD4hBxkpPYZ8XrhDQBxZKkfUKoln80RAaKpbkcivmEOkBdHVcABiu30igug2EocCOS3zKwACriRlOENSLG96xJlUk0uERWJb5nfcB/g4DOj6EwBuuPJpy6ljNRJTCXOXYy49Nz9p0aRM3YgY4ZL5HsXz6aQEpvklgjyU/+jzQnER5+QfVSUqhwi5Koufjr7GuAveZ/HbiCNML0yQ7zx4q0CKCNuFonvnNsCDGzk/W2KgFqGSb4hmVBKtTkVECEm9lMkwvmXACPyvnalapBRJ5IJRWG/mpgaKHFQJHnq9DPI6JSPWRHio8RWKLS6Rj4ZsXtGiDfzgOLNVz9dAC0acUz2onCe4KYs4qZahMYIaon++ekJJFEknzoVpNKZ1YCaGTvOjXF2D2REn+JpGTR7lnzp0CsstqZsBtQQL5wRp1cAv8nz/hACehSEilToYA2oIr5wRCwACnAUbHyZQgWFGSb5HO+kJEA5pDohghIG8lM/Zhd3YBNMG3gXJQIixKZTkQop3ZCf+tAbLsGmCPHJULohA8qIDlaEuSmTH37FBihTMGlsJBU3HWIMABGWEn0w4jrMhMk9TLoXxao7oSMiKJr6YESYCRkGV8+g7q47oGO4WYJUbsMbEdgKsblCuHBrhDriOQ5x9gnITYcNp7BAim2GUgsIiBD3MREVmC8Yfqi+MCwX4qvuIqQR6og3mDJ8BthA8sOM868BlzslX9tKNlRtgwFRHX5r70xNQ6pvZshelMMiezuhzUlFuI8qhFW7EYEZkeEZ74CQ5QiK7IEm1YX7qOKn9pwBDTXMEIsYoKkivWUdRSzuU5lQRty3dhehoWaIhLEKNWH6mW0YkZJPRty0NsUC8Oe9xxrI6IwiW+9XCzMJ1LWvTnEJew9fFbqCriXU61zXmjKAVQ1yU69rNOvQv6EtWZzJgInqeSuaSgmnrXaTwwxjJLjmxc3t2elZq92VL9sGw6HB1PNwBjQZ2scRhQPlhhFdsSiJUVESpI61guOaHUkoiqIkFYWUsCkPdFj9FFi3MZ7HpMBOak2H4q18uzen++fn5xf7LSmFMItC2xR7UBkjiVIxJbX2L9Db9qPIr7muOZ5C04VnN4VGUuMYjShpJuQOmnL7UhpZ97xze7ZvddP9s9vOeTehv6uJjJxQ5hYl3ZIFwBSNKm/RtAx2Uiapr01AFpG0VsgNiBQCW/ZQ2QxvQv+qopZ42m5p2X8WMB+sKe+FEJzuEaEOuJ/Nolxoqtc4jpj6zZcT+5LYyma1aeJ5yAyNRugl6UNrUqS0FmiKR2y2JYqDe0aW6za7U87Zoto0X64K6K/EHgm0hJ4G3dxXzujimYIWYbJstp3SQgpywurFX1E8FYo3DkPCzU1BQIH0h/Mp3YsTHeECfYlah4OLGiQPM6YUzZDhNcKbLMtepqqKebqbndby397+ie61d/fuBQYx0X7/voeuvr8TDm866pAO10xdsmz2Rg02G9Bs4amsoWiGOqHsYCx707fG8l3ku2X0eu9d5Dt7Ic79vRLpyQ348CHy5VB4ob4hIaCvyO5rsYaCkL4hUjTDPuGFTKizJM7fRiI/9mRv60UiH+xNsRy5lvmjh99FIv9oakZOdNB3ZNsq4Sz8Fjx0EuHZkOFNhAMv5B4id4ey9/4zEvnJ7qU/R1Z/kT/2y3XkUz/YcE12QAguvT1lRIZis48WS1XCqsERf37YSBWLh28/4QJN9qeH90Wkdw+/Zg2vyoQXOiE82lEvywT3nGRp+dBGiBjvD14cdBNZK51GwzVfvDi4N13NmmwI/zNThxrgSLBGqCX8tnJ7ZgqOmPLtV1lvXspkaEeG4WU3069L1VjK4lmgUgg71JGGvvimCaX6ikslH/pCqOVDimxBX9UAh4I1QrV/KG76Rah1FDfgNQ19MIXXbIyhjz88YVUhVL8NOP2kibZuowk0/QlgVHkPS6j8jegrbyTKOX2aqnQwbVG8ZK3pglaKCQ/UgUXYggxdlF1E+BiNQqiNJqoJcSgjGpMFeEhYJaQbqylR7c/WR4R9CKYKYUukHMVQCOlm2agSvmHMe1hC5fNZrWdBR0iZ8rc92TBaPLDVbR5MqDVDirE2WZT9J0rCFY1Q6gxpRGNFgwgpMj5DuR0atJTNQKjPPRVZMqHakXdaBqZmQ1afopkgwsHsmlqaOrhpNR4/ktmOjo5IJtQ7+BRj3gohXWFKVXgb5w8FpSU62OhIYTtyJOSUVtifvZhMwmixfZS9dJgedRs7Pb/MHrUHk8EjJfTqpbKjFoWUy2o2ByVOBaFomO2eJELr+uCUl4TBWfcLURLSRRq6bMHwlnV7EvUk9xRmEngJOn8YAGFUwtlISQbVqjLQYW+QnG2tAniGVBFlxqer2njGSlhsW43I5uJ/MSies2bNRMs6j09HSFm1Adez9WVbXSqYW2K3+T3SAFD+v48mRs6+fo/ShnSVN13viUnbCCVzOM3+HPnw+erj5fcK6OXHq28fIlemUbnEmW1VFCUh3XAiXQ8YQ2hdMvTq/sH8C59yiybAc/vuC0pCKsBIhC7SYAjFTbMRc69++mDgu3+VM/loFbO9hIqQemcC1UgUjtC6dI/NLb7q/vrp4eHhw6er3KtczuyjuMWJdIS0K06oRhOxhFHB7Kc5pMVXihbRf5rCDH7jBR0h7TJTqhFhPKHFT5EVDTJZEOujlITU02tUZZs9HyqyLd9jsXy4JW0eCGlH9alSPm+raVSlDmzFWxbJ+pp9WaIXQtqZGbp04UBobYp44Rey0xLST+TTzJA67j0Uo+6LvR13zVAReji4hiqYOu6uFG8dx2Q02RddeiOkn+Wm6uU7HxYhbbr067vOm2VpCD2sVKAKNYTjMKRNkhUTXcl5xzNND9jDWm/YzlF3QiIiEZCK0MtCaMgWfE3kI02kU6dwkzgQSHvWKQg9nZNBs3JvhXjiR/E3/FoM7pJ47gANoaeVexQN0b4bwWzEeBw7DJ6Lkw+PoCH0tOXCL0LxhziStTFyVfQivlrTRTGqn/ECSJER01ukY1uk32VCsxk5ZECk34nnuMDnnjzuKYEX35gdJQYV45qyAzuy6iu/Ed105CvZ4WM1REJxM96XumCKzfVfwGxZMxCCZ0i9bpoBL0/E73PWJP0r7iyim4IJPR+Q4X1XkEkEwHicZEP45jWvu4LAPSinAxUUE/5OJCQZEbwbwdNeBEXQaEo8IIoIGI+TCIHraYbYzg2dvSCcn1Qkm5BoRNCJWMxw59MBu8HOp0GKty6A8bh9rFsX9FiFYU5tBcYax7NpUEnqSvibYw8YuN9iqJ3OwFiTdLrHYjvnSphrO6d9UNU21G71yDHohCjGIZRKrSzrhphjsy2nprgE2Us+5Ck8sLrGofMkninLY0iMOeUdpw5NEXTmwLCH8IASBr4DLIrKclMCo8rHZi8devpzgI3AQx/fApkqxXeeROkyy/Zlh8wNLmYvvQ8JD3+OEsCI2MLbDKhS6pi5nOUKQsRZEUDowzFKACPiijbx1AZIUvYSdx4moAvsx1FY7kbEFG3SLUsDiBCPbr2cjOHLMabu+4PsJY3QoeNTGG9sqd+9c5Hx5YR210E360lmPeGPRWpANrf4x2HPQuhWevt1/KVr3jWF0vnDP782rj8uWqOJG9/H68bXPw9NhG5l2zDntpjksp3UPB7c6901YrFY6fqKgjG3eHVdQp+q3PVMZiyQCf079Jo8nGFMFr3lL7FKTFEp9pkFQeYW2c+xkvqhSuzLsoFxmvjDfhy4p4kcbAbJorf87msj1lcJGdINEuEh85UGH2p8fTdgnCYeLehPmFFF7EXpp9FZ+FTG0vXn+8VFLGYOvf7xM8IrmT9kYCSOeud9fa4eyU+Ts0p8Ofxi5RtQfru6ZxfNYu+vvtnpdMYvh8o2b9Jom48+Kos014YCTW95405vfw6Updj19Tdd19fqS46qxH48RbmDMBbF++mjspzjafrZL70v/24QbtcEWiKjDRgr//7SO3Tegej/wwPwJ9HyfIb/z1uS+YZQJfb2ndPDr/05fdYs+4wpn8kwxyexCsQk3lSqxE52GAylv8eVayqbfwfh1de2K6OxnlGVivwQerMH8fxInhhkmjLlmbXYGPB0yNiaqXT04eRZrAzPR+AXRtT2HCFjhlbi93MRBlrTEfn6WPFU9Ze8jvIxwfpjPDIBAMbW9R8f6VMC1Qc+ZdbG66KqKmpHddTPCJSfDMgzQQAiKYAjf0IgQszUgiGUjTiORyDWM3wgfLIy43nGY30nICeNVRbG8xDLyHpAgLHY2J7tHJgNxwUYiawGAjjWxzoHgTjm51aXxw44hqfIWjTmynvsfGNGHPuT1VWNz1PH76G6xmPGQDxU1zhiakAe2teozRioAVWNtjUG1wKNGp2rBu2gA41oRDhoLKPK/jNOFJ8snxkrk9EALfKPceLs15c/MWdy4gtOQzvrZLqnWaveISuTbT6DPEE+HjxVZSrKyuojcE6MYJSPla6v8qojZ2X1scMZVS4j1L7K/0NkoUKFChUqVKhQoUKFChUqVKhQoUL9n+i/vAM+ATEyrlYAAAAASUVORK5CYII=" />
              <h3>Anu</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                libero lacus, euismod quis mauris eu, tincidunt ultrices tellus
              </p>
            </Typography>
          </Card>
        </CardContent>
      </Card>
    </Card>
  );
}
