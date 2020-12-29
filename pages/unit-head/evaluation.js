import LayoutUnitHead from '../../components/layout-unit-head'
import EvaluationSemester from '../../components/unit-head/evaluation/evaluation-semester'
import Link from 'next/link'

function Evaluation() {
    return (
        <LayoutUnitHead>
            <br />
		<h3 align = "center"> Peer Evaluation </h3>
		<br />
            <div className="list-group">
                <a className = "list-group-item list-group-item-action list-group-item-secondary" href = "#evaluationsem1ay20202021" data-toggle = "collapse" aria-controls = "evaluationsem1ay20202021">1st Semester, AY 2020-2021</a>
		<div id = "evaluationsem1ay20202021" className = "jumbotron collapse">
			<EvaluationSemester />
		</div>
		<a className = "list-group-item list-group-item-action list-group-item-secondary">Midterm, AY 2019-2020</a>
		<a className = "list-group-item list-group-item-action list-group-item-secondary">2nd Semester, 2019-2020</a>
		<a className = "list-group-item list-group-item-action list-group-item-secondary">1st Semester, 2019-2020</a>
		<a className = "list-group-item list-group-item-action list-group-item-secondary">Midterm, 2018-2019</a>
		<a className = "list-group-item list-group-item-action list-group-item-secondary">2nd Semester, 2018-2019</a>
            </div>
        </LayoutUnitHead>
    )
  }
  
 export default Evaluation