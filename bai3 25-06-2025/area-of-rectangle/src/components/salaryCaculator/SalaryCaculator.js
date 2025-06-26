import {useEffect, useState} from "react";
import './SalaryCaculator.css'

function SalaryCaculator() {
    const [baseSalary, setBaseSalary] = useState();
    const [monday, setMonday] = useState();
    const [tuesday, setTuesday] = useState();
    const [wednesday, setWednesday] = useState();
    const [thursday, setThursday] = useState();
    const [friday, setFriday] = useState();
    const [saturday, setSaturday] = useState();
    const [sunday, setSunday] = useState();
    const [totalHour, setTotalHour] = useState();
    const [overtimeHour, setOvertimeHour] = useState();
    const [totalSalary, setTotalSalary] = useState();

    const mondayHandler = (e) => {
        setMonday(parseFloat(e.target.value || null));
    };

    const tuesdayHandler = (e) => {
        setTuesday(parseFloat(e.target.value || null));
    };

    const wednesdayHandler = (e) => {
        setWednesday(parseFloat(e.target.value || null));
    };

    const thursdayHandler = (e) => {
        setThursday(parseFloat(e.target.value || null));
    };

    const fridayHandler = (e) => {
        setFriday(parseFloat(e.target.value || null));
    };

    const saturdayHandler = (e) => {
        setSaturday(parseFloat(e.target.value || null));
    };

    const sundayHandler = (e) => {
        setSunday(parseFloat(e.target.value || null));
    };

    const baseSalaryHandler = (e) => {
        setBaseSalary(parseFloat(e.target.value) || null);
    }

    //validate form input, xem da dien du ttin chua
    const validateForm = () => {
        if (baseSalary == null || monday == null || tuesday == null || wednesday == null || thursday == null || friday == null || saturday == null || sunday == null)
            return "Vui lòng nhập đầy đủ thông tin";
        return null;
    }

    //su dung useeffect de cap nhap totalHour theo realtime
    useEffect(() => {
        //neu dien du ttin thi tinh totalHour, neu ko du ttin thi dien string
        if (validateForm() === null) {
            setTotalHour(monday + tuesday + wednesday + thursday + friday + saturday + sunday);
        } else {
            setTotalHour(validateForm());
        }
    }, [monday, tuesday, wednesday, thursday, friday, saturday, sunday]);

    //tinh gio lam them theo realtime
    useEffect(() => {
        if (validateForm() === null) {
            if (totalHour > 40) {
                setOvertimeHour(totalHour - 40);
            } else {
                setOvertimeHour(0);
            }
        } else {
            setOvertimeHour(validateForm());
        }
    }, [totalHour]);

    //tinh tong luong
    useEffect(() => {
        if (validateForm() === null) {
            if (overtimeHour > 0) {
                setTotalSalary((baseSalary * 1.5 * overtimeHour) + baseSalary * 40);
            } else {
                setTotalSalary(baseSalary * totalHour);
            }
        } else {
            setTotalSalary(validateForm());
        }
    }, [totalHour, overtimeHour]);

    return (
        <div className={"SalaryCaculator"}>
            <h1>Salary Caculator</h1>
            <div className={"baseSalaryForm"}>
                <span>Base salary/hour</span>
                <input
                    type={"number"}
                    placeholder={"vnd"}
                    onChange={baseSalaryHandler}
                />
            </div>
            <table>
                <thead>
                <tr>
                    <th>Monday</th>
                    <th>Thursday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <input
                            placeholder={"hour"}
                            type={"number"}
                            onChange={mondayHandler}
                        />
                    </td>
                    <td>
                        <input
                            placeholder={"hour"}
                            type={"number"}
                            onChange={tuesdayHandler}
                        />
                    </td>
                    <td>
                        <input
                            placeholder={"hour"}
                            type={"number"}
                            onChange={wednesdayHandler}
                        />
                    </td>
                    <td>
                        <input
                            placeholder={"hour"}
                            type={"number"}
                            onChange={thursdayHandler}
                        />
                    </td>
                    <td>
                        <input
                            placeholder={"hour"}
                            type={"number"}
                            onChange={fridayHandler}
                        />
                    </td>
                    <td>
                        <input
                            placeholder={"hour"}
                            type={"number"}
                            onChange={saturdayHandler}
                        />
                    </td>
                    <td>
                        <input
                            placeholder={"hour"}
                            type={"number"}
                            onChange={sundayHandler}
                        />
                    </td>
                </tr>
                </tbody>
            </table>

            <h3>Tổng số giờ làm: {totalHour}</h3>
            <h3>Tổng số giờ làm thêm: {overtimeHour}</h3>
            <h3>Tổng lương: {totalSalary}</h3>
        </div>
    );
}

export default SalaryCaculator;