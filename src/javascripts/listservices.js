import React, { Component} from 'react'
import 'stylesheets/modules/addservice'


class ListServices extends Component {
    constructor(props, context){
        super(props, context)
        this.submitService = this.submitService.bind(this)
        this.state = {
            /*message: '',
            messages: []*/
            title: '',
            project: '',
            private:'',
            projectcontributor:'',
            tasktype:'',
            prioroty:'',
            startdate:'',
            enddate:'',
            additionalinfo:'',
            services: []
        }
    }

    componentDidMount(){
        console.log('componentDidMount')
        firebase.database().ref('services/').on('value',(snapshot)=> {

            const currentServices = snapshot.val()

            if (currentServices != null){
                this.setState({
                    services: currentServices
                })
            }
        })
    }

    }

  
    render() {
        
        
        
        const currentService = this.state.services.map((service, i) => {
            return (
                
               /* <li key={service.id}>
                {service.title}
                {service.project}
                {service.private}
                {service.projectcontributor}
                {service.tasktype}
                {service.priority}
                {service.startdate}
                {service.enddate}
                {service.additionalinfo}
                </li>*/
                 <div id="container">

				        <ul>
				        <li className="column-header">
					        <em className="column-task">Task</em>
					        <em className="column-priority">Priority</em>
					        <em className="column-created">Modified</em>
					        <em className="column-due">Due</em>
					        <em className="column-time">Time</em>
					        <em className="column-cost">Cost</em>
					        <em classNames="column-action">Action</em>
				        </li>
				        </ul>
				
								
	                </div>
            )
        })

    }
}

export default ListServices