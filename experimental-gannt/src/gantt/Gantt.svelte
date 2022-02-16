<script lang="ts">

    let _is_iframe_view = false;
    let iOS = "0";

    let _version = "gantt_chart";
    let _original_ids = "2933054";

    //COLUMN WIDTH
    let _left_width = "600";

    //ZOOM
    let _zoom = "d100";

    //FONT SIZE
    let _font_size = "13";

    //SHOW DOCUMENTS
    let _show_documents = true;

    //SHOW COMMENTS
    let _show_comments = true;

    //SHOW META COLUMN
    let _has_meta = (_show_documents == true || _show_comments == true) ? true : false;

    //RESOURCE VIEW OPEN?
    let _resource_view = "closed";

    //DEFAULT TASK COLOR
    // let _default_color = _colors[0];

    //SHOW OR HIDE PERCENT COMPLETE
    let _loads = 0;

    //USER ICON
    let _user_icon = "https://api.teamgantt.com/assets/user_pic/?text=R";
    let _user_num = "13423289";

    //TOOL TIPS
    let _show_tooltips = 1000;
    if(iOS == 1) {
        _show_tooltips = 1000;
    }
    let _tooltip_step = null;
    let _tooltip_progress = null;
    let _tooltip_tip_num = null;
    let _tooltip_force_task = null;

    //TIPS
    let _hide_resource_view_tool_tip = "";
    let _tip_dependency_remove_slack = "";
    let _close_start_date_alert = false;
    let _comment_tool_tip = "";


    const calcStyle = `filter: alpha(opacity=70);`
</script>
<svelte:head>
    <link rel='stylesheet' href='/team_gantt.css'>
</svelte:head>

<section>
    <p>Gantt</p>
    <div id="gantt_location" class="">
        <div id="task_header" class="d100">
            <div class="task_months" var_width="484" id="month_11_2021" var_left="2" def_left="2" style="width: 484px; margin-left: 605px; left: 0px;"><span>November 2021</span></div>
            <div class="task_months" var_width="506" id="month_12_2021" var_left="486" def_left="486" style="width: 506px; margin-left: 1089px; left: 0px;"><span>December 2021</span></div>
            <div class="task_months" var_width="462" id="month_1_2022" var_left="992" def_left="992" style="width: 462px; margin-left: 1595px; left: 0px;"><span>January 2022</span></div>
            <div class="task_months" var_width="440" id="month_2_2022" var_left="1454" def_left="1454" style="width: 440px; margin-left: 2057px; left: 0px;"><span>February 2022</span></div>
            <div class="task_months" var_width="506" id="month_3_2022" var_left="1894" def_left="1894" style="width: 506px; margin-left: 2497px; left: 0px;"><span>March 2022</span></div>
            <div class="task_months" var_width="462" id="month_4_2022" var_left="2400" def_left="2400" style="width: 462px; margin-left: 3003px; left: 0px;"><span>April 2022</span></div>
            <div class="task_months" var_width="484" id="month_5_2022" var_left="2862" def_left="2862" style="width: 484px; margin-left: 3465px; left: 0px;"><span>May 2022</span></div>
            <div class="task_months" var_width="484" id="month_6_2022" var_left="3346" def_left="3346" style="width: 484px; margin-left: 3949px; left: 0px;"><span>June 2022</span></div>
            <div class="task_months" var_width="462" id="month_7_2022" var_left="3830" def_left="3830" style="width: 462px; margin-left: 4433px; left: 0px;"><span>July 2022</span></div>
            <div id="spacer" class="task_months" var_left="0" style="width: 600px; margin-left: 1000px; left: 0px;">
                <div id="task_name_column_spacer" style="position: absolute; top: 0px; height: 1.75em;">
                    <div id="task_name_header_resizer"></div>
                    <div class="tab_selector"></div>
                </div>
                <div style="text-align: right;">
                    <div class="spacer_tab percent_complete" id="spacer_tab_percent_complete">Progress
                        <div class="tab_selector"></div>
                    </div>
                    <div class="spacer_tab assigned_resources" id="spacer_tab_assigned_resources">Assigned
                        <div class="tab_selector"></div>
                    </div>
                    <div class="spacer_tab actual_hours" id="spacer_tab_actual_hours">Actual Hrs
                        <div class="tab_selector"></div>
                    </div>
                    <div class="spacer_tab estimated_hours" id="spacer_tab_estimated_hours">Est. Hours
                        <div class="tab_selector"></div>
                    </div>
                </div>
            </div>
        </div>
        <div id="gantt_chart" class="font13 d100">
            <div id="meta_data" class="" style="cursor: default; min-height: 1055px;">
                <div id="project_meta_2933054" class="project_meta" project_id="2933054">
                    <div id="project_meta_discussion_2933054" class="meta_item has_metric"><i class="tg-icon discussion"></i><span></span></div>
                    <div class="meta_item has_metric">&nbsp;</div>
                </div>
                <div id="project_meta_target_2933054" class="project_target">
                    <div id="category_meta_23938234" class="group_meta" group_id="23938234">
                        <div id="group_meta_discussion_23938234" class="meta_item has_metric"><i class="tg-icon discussion"></i><span></span></div>
                        <div class="meta_item has_metric">&nbsp;</div>
                    </div>
                    <div id="category_meta_target_23938234" class="group_target">
                        <div id="task_meta_112103584" class="task_meta" task_id="112103584">
                            <div id="task_meta_discussion_112103584" class="meta_item has_metric"><i class="tg-icon discussion"></i><span></span></div>
                            <div id="task_meta_checklist_112103584" class="meta_item has_metric"><i class="tg-icon checklist"></i><span></span></div>
                        </div>
                        <div id="task_meta_quick_add_23938234" class="task_meta super_quick_add" task_id="quick_add_23938234" group_id="23938234"></div>
                    </div>
                </div>
            </div>
            <div id="category_task_list" style="width: 495px; cursor: default; min-height: 1055px;" class="">
                <div id="category_task_list_wrapper">
                    <div id="inner_list_wrapper" class="task_wrapper" style="min-height: 1055px;">
                        <div class="list_project_name" id="project_title_2933054" project_id="2933054">
                            <div class="percent_complete" id="project_percent_complete_2933054">0%</div>
                            <div class="assigned_resources" id="project_assigned_resources_2933054"></div>
                            <div class="actual_hours" id="actual_hours_2933054"> </div>
                            <div class="estimated_hours" id="project_estimated_hours_2933054"> </div>
                            <div class="quick_controls">
                                <div class="quick_edit badge_block" project_id="2933054" title="Edit Project"><i class="tg-icon edit-pencil"></i></div>
                            </div>
                            <div class="project_name">xxxxx</div>
                        </div>
                        <div id="project_target_2933054" class="project_target">
                            <div class="category" id="category_title_23938234" group_id="23938234" group_hidden="0" def_hidden="" target="group">
                                <div class="percent_complete" id="group_percent_complete_23938234">0%</div>
                                <div class="assigned_resources" id="group_assigned_resources_23938234"></div>
                                <div class="actual_hours" id="group_actual_hours_23938234"> </div>
                                <div class="estimated_hours" id="group_estimated_hours_23938234"> </div>
                                <div class="quick_controls">
                                    <div class="quick_edit badge_block" group_id="23938234" title="Edit Group"><i class="tg-icon edit-pencil"></i></div>
                                    <div class="quick_delete badge_block" group_id="23938234" title="Delete Group"><i class="tg-icon trash"></i></div>
                                    <div class="quick_cancel badge_block" title="Cancel"><i class="tg-icon remove"></i></div>
                                    <div class="quick_add_control badge_block" id="quick_add_category_23938234_x" type="group" type_id="23938234"><i class="tg-icon dot-menu"></i></div>
                                </div>
                                <div class="collapse_arrow" title="Collapse Group"><i class="tg-icon triangle-down" id="group_arrow_23938234"></i></div>
                                <div class="group_mover" group_id="23938234" title="Reorder Groups"></div>
                                <div class="category_name" id="list_group_23938234" title="Click to edit group name" edit_tag="name">First Group (click to rename)</div>
                            </div>
                            <div id="group_target_23938234" group_id="23938234">
                                <div id="task_title_112103584" task_id="112103584" class="task">
                                    <div class="percent_complete">
                                        <div contenteditable="true" id="task_percent_input_112103584" class="editable" task_id="112103584" group_id="23938234" edit_tag="percent" percent_complete="0" allow_arrows="1" title="Edit Percent Complete">0%</div>
                                    </div>
                                    <div class="assigned_resources">
                                        <div class="assigned_resources_wrapper editable">
                                            <div id="task_assigned_resources_112103584" class="assign_text" task_id="112103584">assign</div>
                                        </div>
                                    </div>
                                    <div class="actual_hours" id="task_actual_hours_112103584"></div>
                                    <div class="estimated_hours"></div>
                                    <div class="quick_controls">
                                        <div class="quick_edit badge_block" task_id="112103584" task_type="task" title="Edit Task"><i class="tg-icon edit-pencil"></i></div>
                                        <div class="quick_delete badge_block" task_id="112103584" title="Delete Task"><i class="tg-icon trash"></i></div>
                                        <div class="quick_cancel badge_block" title="Cancel"><i class="tg-icon remove"></i></div>
                                        <div class="quick_add_control badge_block" id="quick_add_task_112103584_x" type="task" type_id="112103584"><i class="tg-icon dot-menu"></i></div>
                                    </div>
                                    <div class="task_mover" task_id="112103584" title="Reorder Tasks"></div>
                                    <div class="task_name editable" id="task_name_112103584" task_id="112103584" edit_tag="name" style="margin-left: 0em;">First Task (click to rename)</div>
                                </div>
                                <div class="task super_quick_add" task_id="quick_add_23938234" id="task_title_quick_add_23938234" group_id="23938234">
                                    <div class="super_quick_add"><i class="fa fa-plus-circle"></i><span class="quick_add_task" group_id="23938234">Task</span><span group_id="23938234">Milestone</span><span class="group" group_id="23938234">Group of Tasks</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="hidden_row_height"></div>
                <div class="dividing_bar" style="margin-left: 434px;"></div>
                <div class="dividing_bar" style="margin-left: 309px;"></div>
            </div>
            <div id="resize_bar" title="Click and drag to resize" diff="186" style="left: 416px;"></div>
            <div id="tasks" style="position: relative; cursor: default;" class="">
                <div id="background_lines" style="top: 108px;">
                    <div id="move_bg" class="hidden" style={calcStyle}></div>
                    <div id="move_dates" class="hidden">
                        <div id="mover_start"></div>
                        <div id="mover_end"></div>
                    </div>
                    <div class="month_lines month_lines" id="line_20211101" var_left="2" date="2021-11-01" style="margin-left: 2px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday month_lines" style="margin-left: 2px; width: 22px;"><span class="task_month_day_day__number">1</span><span class="task_month_day_day__label">M</span></div>
                    <div class="day_lines" id="line_20211102" var_left="24" date="2021-11-02" style="margin-left: 24px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 24px; width: 22px;"><span class="task_month_day_day__number">2</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20211103" var_left="46" date="2021-11-03" style="margin-left: 46px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 46px; width: 22px;"><span class="task_month_day_day__number">3</span><span class="task_month_day_day__label">W</span></div>
                    <div class="day_lines" id="line_20211104" var_left="68" date="2021-11-04" style="margin-left: 68px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 68px; width: 22px;"><span class="task_month_day_day__number">4</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20211105" var_left="90" date="2021-11-05" style="margin-left: 90px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 90px; width: 22px;"><span class="task_month_day_day__number">5</span><span class="task_month_day_day__label">F</span></div>
                    <div class="task_month_day_day" id="line_20211106" var_left="90" is_hidden="true" style="margin-left: 90px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 90px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">6</span><span class="task_month_day_day__label">S</span></div>
                    <div class="task_month_day_day" id="line_20211107" var_left="90" is_hidden="true" style="margin-left: 90px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 90px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">7</span><span class="task_month_day_day__label">S</span></div>
                    <div class="day_lines new_week_line" id="line_20211108" var_left="112" date="2021-11-08" style="margin-left: 112px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday new_week_line" style="margin-left: 112px; width: 22px;"><span class="task_month_day_day__number">8</span><span class="task_month_day_day__label">M</span></div>
                    <div class="day_lines" id="line_20211109" var_left="134" date="2021-11-09" style="margin-left: 134px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 134px; width: 22px;"><span class="task_month_day_day__number">9</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20211110" var_left="156" date="2021-11-10" style="margin-left: 156px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 156px; width: 22px;"><span class="task_month_day_day__number">10</span><span class="task_month_day_day__label">W</span></div>
                    <div class="day_lines" id="line_20211111" var_left="178" date="2021-11-11" style="margin-left: 178px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 178px; width: 22px;"><span class="task_month_day_day__number">11</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20211112" var_left="200" date="2021-11-12" style="margin-left: 200px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 200px; width: 22px;"><span class="task_month_day_day__number">12</span><span class="task_month_day_day__label">F</span></div>
                    <div class="task_month_day_day" id="line_20211113" var_left="200" is_hidden="true" style="margin-left: 200px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 200px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">13</span><span class="task_month_day_day__label">S</span></div>
                    <div class="task_month_day_day" id="line_20211114" var_left="200" is_hidden="true" style="margin-left: 200px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 200px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">14</span><span class="task_month_day_day__label">S</span></div>
                    <div class="day_lines new_week_line" id="line_20211115" var_left="222" date="2021-11-15" style="margin-left: 222px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday new_week_line" style="margin-left: 222px; width: 22px;"><span class="task_month_day_day__number">15</span><span class="task_month_day_day__label">M</span></div>
                    <div class="day_lines" id="line_20211116" var_left="244" date="2021-11-16" style="margin-left: 244px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 244px; width: 22px;"><span class="task_month_day_day__number">16</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20211117" var_left="266" date="2021-11-17" style="margin-left: 266px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 266px; width: 22px;"><span class="task_month_day_day__number">17</span><span class="task_month_day_day__label">W</span></div>
                    <div class="day_lines" id="line_20211118" var_left="288" date="2021-11-18" style="margin-left: 288px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 288px; width: 22px;"><span class="task_month_day_day__number">18</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20211119" var_left="310" date="2021-11-19" style="margin-left: 310px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 310px; width: 22px;"><span class="task_month_day_day__number">19</span><span class="task_month_day_day__label">F</span></div>
                    <div class="task_month_day_day" id="line_20211120" var_left="310" is_hidden="true" style="margin-left: 310px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 310px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">20</span><span class="task_month_day_day__label">S</span></div>
                    <div class="task_month_day_day" id="line_20211121" var_left="310" is_hidden="true" style="margin-left: 310px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 310px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">21</span><span class="task_month_day_day__label">S</span></div>
                    <div class="day_lines new_week_line" id="line_20211122" var_left="332" date="2021-11-22" style="margin-left: 332px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday new_week_line" style="margin-left: 332px; width: 22px;"><span class="task_month_day_day__number">22</span><span class="task_month_day_day__label">M</span></div>
                    <div class="day_lines" id="line_20211123" var_left="354" date="2021-11-23" style="margin-left: 354px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 354px; width: 22px;"><span class="task_month_day_day__number">23</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20211124" var_left="376" date="2021-11-24" style="margin-left: 376px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 376px; width: 22px;"><span class="task_month_day_day__number">24</span><span class="task_month_day_day__label">W</span></div>
                    <div class="day_lines" id="line_20211125" var_left="398" date="2021-11-25" style="margin-left: 398px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 398px; width: 22px;"><span class="task_month_day_day__number">25</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20211126" var_left="420" date="2021-11-26" style="margin-left: 420px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 420px; width: 22px;"><span class="task_month_day_day__number">26</span><span class="task_month_day_day__label">F</span></div>
                    <div class="task_month_day_day" id="line_20211127" var_left="420" is_hidden="true" style="margin-left: 420px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 420px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">27</span><span class="task_month_day_day__label">S</span></div>
                    <div class="task_month_day_day" id="line_20211128" var_left="420" is_hidden="true" style="margin-left: 420px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 420px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">28</span><span class="task_month_day_day__label">S</span></div>
                    <div class="day_lines new_week_line" id="line_20211129" var_left="442" date="2021-11-29" style="margin-left: 442px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday new_week_line" style="margin-left: 442px; width: 22px;"><span class="task_month_day_day__number">29</span><span class="task_month_day_day__label">M</span></div>
                    <div class="day_lines" id="line_20211130" var_left="464" date="2021-11-30" style="margin-left: 464px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 464px; width: 22px;"><span class="task_month_day_day__number">30</span><span class="task_month_day_day__label">T</span></div>
                    <div class="month_lines month_lines" id="line_20211201" var_left="486" date="2021-12-01" style="margin-left: 486px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday month_lines" style="margin-left: 486px; width: 22px;"><span class="task_month_day_day__number">1</span><span class="task_month_day_day__label">W</span></div>
                    <div class="day_lines" id="line_20211202" var_left="508" date="2021-12-02" style="margin-left: 508px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 508px; width: 22px;"><span class="task_month_day_day__number">2</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20211203" var_left="530" date="2021-12-03" style="margin-left: 530px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 530px; width: 22px;"><span class="task_month_day_day__number">3</span><span class="task_month_day_day__label">F</span></div>
                    <div class="task_month_day_day" id="line_20211204" var_left="530" is_hidden="true" style="margin-left: 530px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 530px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">4</span><span class="task_month_day_day__label">S</span></div>
                    <div class="task_month_day_day" id="line_20211205" var_left="530" is_hidden="true" style="margin-left: 530px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 530px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">5</span><span class="task_month_day_day__label">S</span></div>
                    <div class="day_lines new_week_line" id="line_20211206" var_left="552" date="2021-12-06" style="margin-left: 552px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday new_week_line" style="margin-left: 552px; width: 22px;"><span class="task_month_day_day__number">6</span><span class="task_month_day_day__label">M</span></div>
                    <div class="day_lines" id="line_20211207" var_left="574" date="2021-12-07" style="margin-left: 574px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 574px; width: 22px;"><span class="task_month_day_day__number">7</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20211208" var_left="596" date="2021-12-08" style="margin-left: 596px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 596px; width: 22px;"><span class="task_month_day_day__number">8</span><span class="task_month_day_day__label">W</span></div>
                    <div class="day_lines" id="line_20211209" var_left="618" date="2021-12-09" style="margin-left: 618px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 618px; width: 22px;"><span class="task_month_day_day__number">9</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20211210" var_left="640" date="2021-12-10" style="margin-left: 640px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 640px; width: 22px;"><span class="task_month_day_day__number">10</span><span class="task_month_day_day__label">F</span></div>
                    <div class="task_month_day_day" id="line_20211211" var_left="640" is_hidden="true" style="margin-left: 640px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 640px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">11</span><span class="task_month_day_day__label">S</span></div>
                    <div class="task_month_day_day" id="line_20211212" var_left="640" is_hidden="true" style="margin-left: 640px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 640px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">12</span><span class="task_month_day_day__label">S</span></div>
                    <div class="day_lines new_week_line" id="line_20211213" var_left="662" date="2021-12-13" style="margin-left: 662px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday new_week_line" style="margin-left: 662px; width: 22px;"><span class="task_month_day_day__number">13</span><span class="task_month_day_day__label">M</span></div>
                    <div class="day_lines" id="line_20211214" var_left="684" date="2021-12-14" style="margin-left: 684px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 684px; width: 22px;"><span class="task_month_day_day__number">14</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20211215" var_left="706" date="2021-12-15" style="margin-left: 706px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 706px; width: 22px;"><span class="task_month_day_day__number">15</span><span class="task_month_day_day__label">W</span></div>
                    <div class="day_lines" id="line_20211216" var_left="728" date="2021-12-16" style="margin-left: 728px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 728px; width: 22px;"><span class="task_month_day_day__number">16</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20211217" var_left="750" date="2021-12-17" style="margin-left: 750px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 750px; width: 22px;"><span class="task_month_day_day__number">17</span><span class="task_month_day_day__label">F</span></div>
                    <div class="task_month_day_day" id="line_20211218" var_left="750" is_hidden="true" style="margin-left: 750px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 750px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">18</span><span class="task_month_day_day__label">S</span></div>
                    <div class="task_month_day_day" id="line_20211219" var_left="750" is_hidden="true" style="margin-left: 750px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 750px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">19</span><span class="task_month_day_day__label">S</span></div>
                    <div class="day_lines new_week_line" id="line_20211220" var_left="772" date="2021-12-20" style="margin-left: 772px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday new_week_line" style="margin-left: 772px; width: 22px;"><span class="task_month_day_day__number">20</span><span class="task_month_day_day__label">M</span></div>
                    <div class="day_lines" id="line_20211221" var_left="794" date="2021-12-21" style="margin-left: 794px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 794px; width: 22px;"><span class="task_month_day_day__number">21</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20211222" var_left="816" date="2021-12-22" style="margin-left: 816px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 816px; width: 22px;"><span class="task_month_day_day__number">22</span><span class="task_month_day_day__label">W</span></div>
                    <div class="day_lines" id="line_20211223" var_left="838" date="2021-12-23" style="margin-left: 838px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 838px; width: 22px;"><span class="task_month_day_day__number">23</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20211224" var_left="860" date="2021-12-24" style="margin-left: 860px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 860px; width: 22px;"><span class="task_month_day_day__number">24</span><span class="task_month_day_day__label">F</span></div>
                    <div class="task_month_day_day" id="line_20211225" var_left="860" is_hidden="true" style="margin-left: 860px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 860px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">25</span><span class="task_month_day_day__label">S</span></div>
                    <div class="task_month_day_day" id="line_20211226" var_left="860" is_hidden="true" style="margin-left: 860px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 860px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">26</span><span class="task_month_day_day__label">S</span></div>
                    <div class="day_lines new_week_line" id="line_20211227" var_left="882" date="2021-12-27" style="margin-left: 882px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday new_week_line" style="margin-left: 882px; width: 22px;"><span class="task_month_day_day__number">27</span><span class="task_month_day_day__label">M</span></div>
                    <div class="day_lines" id="line_20211228" var_left="904" date="2021-12-28" style="margin-left: 904px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 904px; width: 22px;"><span class="task_month_day_day__number">28</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20211229" var_left="926" date="2021-12-29" style="margin-left: 926px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 926px; width: 22px;"><span class="task_month_day_day__number">29</span><span class="task_month_day_day__label">W</span></div>
                    <div class="day_lines" id="line_20211230" var_left="948" date="2021-12-30" style="margin-left: 948px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 948px; width: 22px;"><span class="task_month_day_day__number">30</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20211231" var_left="970" date="2021-12-31" style="margin-left: 970px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 970px; width: 22px;"><span class="task_month_day_day__number">31</span><span class="task_month_day_day__label">F</span></div>
                    <div class="task_month_day_day" id="line_20220101" var_left="970" is_hidden="true" style="margin-left: 970px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 970px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">1</span><span class="task_month_day_day__label">S</span></div>
                    <div class="task_month_day_day" id="line_20220102" var_left="970" is_hidden="true" style="margin-left: 970px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 970px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">2</span><span class="task_month_day_day__label">S</span></div>
                    <div class="day_lines month_lines new_week_line" id="line_20220103" var_left="992" date="2022-01-03" style="margin-left: 992px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday month_lines new_week_line" style="margin-left: 992px; width: 22px;"><span class="task_month_day_day__number">3</span><span class="task_month_day_day__label">M</span></div>
                    <div class="day_lines" id="line_20220104" var_left="1014" date="2022-01-04" style="margin-left: 1014px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1014px; width: 22px;"><span class="task_month_day_day__number">4</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220105" var_left="1036" date="2022-01-05" style="margin-left: 1036px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1036px; width: 22px;"><span class="task_month_day_day__number">5</span><span class="task_month_day_day__label">W</span></div>
                    <div class="day_lines" id="line_20220106" var_left="1058" date="2022-01-06" style="margin-left: 1058px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1058px; width: 22px;"><span class="task_month_day_day__number">6</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220107" var_left="1080" date="2022-01-07" style="margin-left: 1080px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1080px; width: 22px;"><span class="task_month_day_day__number">7</span><span class="task_month_day_day__label">F</span></div>
                    <div class="task_month_day_day" id="line_20220108" var_left="1080" is_hidden="true" style="margin-left: 1080px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1080px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">8</span><span class="task_month_day_day__label">S</span></div>
                    <div class="task_month_day_day" id="line_20220109" var_left="1080" is_hidden="true" style="margin-left: 1080px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1080px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">9</span><span class="task_month_day_day__label">S</span></div>
                    <div class="day_lines new_week_line" id="line_20220110" var_left="1102" date="2022-01-10" style="margin-left: 1102px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday new_week_line" style="margin-left: 1102px; width: 22px;"><span class="task_month_day_day__number">10</span><span class="task_month_day_day__label">M</span></div>
                    <div class="day_lines" id="line_20220111" var_left="1124" date="2022-01-11" style="margin-left: 1124px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1124px; width: 22px;"><span class="task_month_day_day__number">11</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220112" var_left="1146" date="2022-01-12" style="margin-left: 1146px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1146px; width: 22px;"><span class="task_month_day_day__number">12</span><span class="task_month_day_day__label">W</span></div>
                    <div class="day_lines" id="line_20220113" var_left="1168" date="2022-01-13" style="margin-left: 1168px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1168px; width: 22px;"><span class="task_month_day_day__number">13</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220114" var_left="1190" date="2022-01-14" style="margin-left: 1190px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1190px; width: 22px;"><span class="task_month_day_day__number">14</span><span class="task_month_day_day__label">F</span></div>
                    <div class="task_month_day_day" id="line_20220115" var_left="1190" is_hidden="true" style="margin-left: 1190px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1190px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">15</span><span class="task_month_day_day__label">S</span></div>
                    <div class="task_month_day_day" id="line_20220116" var_left="1190" is_hidden="true" style="margin-left: 1190px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1190px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">16</span><span class="task_month_day_day__label">S</span></div>
                    <div class="day_lines new_week_line" id="line_20220117" var_left="1212" date="2022-01-17" style="margin-left: 1212px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday new_week_line" style="margin-left: 1212px; width: 22px;"><span class="task_month_day_day__number">17</span><span class="task_month_day_day__label">M</span></div>
                    <div class="day_lines" id="line_20220118" var_left="1234" date="2022-01-18" style="margin-left: 1234px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1234px; width: 22px;"><span class="task_month_day_day__number">18</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines today_line" id="line_20220119" var_left="1256" date="2022-01-19" style="margin-left: 1256px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day today_line" id="today_line" style="margin-left: 1256px; width: 22px;"><span class="task_month_day_day__number">19</span><span class="task_month_day_day__label">W</span></div>
                    <div class="day_lines today_line_right_edge" id="line_20220120" var_left="1278" date="2022-01-20" style="margin-left: 1278px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday today_line_right_edge" style="margin-left: 1278px; width: 22px;"><span class="task_month_day_day__number">20</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220121" var_left="1300" date="2022-01-21" style="margin-left: 1300px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1300px; width: 22px;"><span class="task_month_day_day__number">21</span><span class="task_month_day_day__label">F</span></div>
                    <div class="task_month_day_day" id="line_20220122" var_left="1300" is_hidden="true" style="margin-left: 1300px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1300px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">22</span><span class="task_month_day_day__label">S</span></div>
                    <div class="task_month_day_day" id="line_20220123" var_left="1300" is_hidden="true" style="margin-left: 1300px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1300px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">23</span><span class="task_month_day_day__label">S</span></div>
                    <div class="day_lines new_week_line" id="line_20220124" var_left="1322" date="2022-01-24" style="margin-left: 1322px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday new_week_line" style="margin-left: 1322px; width: 22px;"><span class="task_month_day_day__number">24</span><span class="task_month_day_day__label">M</span></div>
                    <div class="day_lines" id="line_20220125" var_left="1344" date="2022-01-25" style="margin-left: 1344px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1344px; width: 22px;"><span class="task_month_day_day__number">25</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220126" var_left="1366" date="2022-01-26" style="margin-left: 1366px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1366px; width: 22px;"><span class="task_month_day_day__number">26</span><span class="task_month_day_day__label">W</span></div>
                    <div class="day_lines" id="line_20220127" var_left="1388" date="2022-01-27" style="margin-left: 1388px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1388px; width: 22px;"><span class="task_month_day_day__number">27</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220128" var_left="1410" date="2022-01-28" style="margin-left: 1410px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1410px; width: 22px;"><span class="task_month_day_day__number">28</span><span class="task_month_day_day__label">F</span></div>
                    <div class="task_month_day_day" id="line_20220129" var_left="1410" is_hidden="true" style="margin-left: 1410px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1410px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">29</span><span class="task_month_day_day__label">S</span></div>
                    <div class="task_month_day_day" id="line_20220130" var_left="1410" is_hidden="true" style="margin-left: 1410px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1410px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">30</span><span class="task_month_day_day__label">S</span></div>
                    <div class="day_lines new_week_line" id="line_20220131" var_left="1432" date="2022-01-31" style="margin-left: 1432px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday new_week_line" style="margin-left: 1432px; width: 22px;"><span class="task_month_day_day__number">31</span><span class="task_month_day_day__label">M</span></div>
                    <div class="month_lines month_lines" id="line_20220201" var_left="1454" date="2022-02-01" style="margin-left: 1454px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday month_lines" style="margin-left: 1454px; width: 22px;"><span class="task_month_day_day__number">1</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220202" var_left="1476" date="2022-02-02" style="margin-left: 1476px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1476px; width: 22px;"><span class="task_month_day_day__number">2</span><span class="task_month_day_day__label">W</span></div>
                    <div class="day_lines" id="line_20220203" var_left="1498" date="2022-02-03" style="margin-left: 1498px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1498px; width: 22px;"><span class="task_month_day_day__number">3</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220204" var_left="1520" date="2022-02-04" style="margin-left: 1520px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1520px; width: 22px;"><span class="task_month_day_day__number">4</span><span class="task_month_day_day__label">F</span></div>
                    <div class="task_month_day_day" id="line_20220205" var_left="1520" is_hidden="true" style="margin-left: 1520px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1520px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">5</span><span class="task_month_day_day__label">S</span></div>
                    <div class="task_month_day_day" id="line_20220206" var_left="1520" is_hidden="true" style="margin-left: 1520px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1520px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">6</span><span class="task_month_day_day__label">S</span></div>
                    <div class="day_lines new_week_line" id="line_20220207" var_left="1542" date="2022-02-07" style="margin-left: 1542px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday new_week_line" style="margin-left: 1542px; width: 22px;"><span class="task_month_day_day__number">7</span><span class="task_month_day_day__label">M</span></div>
                    <div class="day_lines" id="line_20220208" var_left="1564" date="2022-02-08" style="margin-left: 1564px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1564px; width: 22px;"><span class="task_month_day_day__number">8</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220209" var_left="1586" date="2022-02-09" style="margin-left: 1586px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1586px; width: 22px;"><span class="task_month_day_day__number">9</span><span class="task_month_day_day__label">W</span></div>
                    <div class="day_lines" id="line_20220210" var_left="1608" date="2022-02-10" style="margin-left: 1608px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1608px; width: 22px;"><span class="task_month_day_day__number">10</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220211" var_left="1630" date="2022-02-11" style="margin-left: 1630px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1630px; width: 22px;"><span class="task_month_day_day__number">11</span><span class="task_month_day_day__label">F</span></div>
                    <div class="task_month_day_day" id="line_20220212" var_left="1630" is_hidden="true" style="margin-left: 1630px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1630px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">12</span><span class="task_month_day_day__label">S</span></div>
                    <div class="task_month_day_day" id="line_20220213" var_left="1630" is_hidden="true" style="margin-left: 1630px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1630px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">13</span><span class="task_month_day_day__label">S</span></div>
                    <div class="day_lines new_week_line" id="line_20220214" var_left="1652" date="2022-02-14" style="margin-left: 1652px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday new_week_line" style="margin-left: 1652px; width: 22px;"><span class="task_month_day_day__number">14</span><span class="task_month_day_day__label">M</span></div>
                    <div class="day_lines" id="line_20220215" var_left="1674" date="2022-02-15" style="margin-left: 1674px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1674px; width: 22px;"><span class="task_month_day_day__number">15</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220216" var_left="1696" date="2022-02-16" style="margin-left: 1696px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1696px; width: 22px;"><span class="task_month_day_day__number">16</span><span class="task_month_day_day__label">W</span></div>
                    <div class="day_lines" id="line_20220217" var_left="1718" date="2022-02-17" style="margin-left: 1718px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1718px; width: 22px;"><span class="task_month_day_day__number">17</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220218" var_left="1740" date="2022-02-18" style="margin-left: 1740px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1740px; width: 22px;"><span class="task_month_day_day__number">18</span><span class="task_month_day_day__label">F</span></div>
                    <div class="task_month_day_day" id="line_20220219" var_left="1740" is_hidden="true" style="margin-left: 1740px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1740px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">19</span><span class="task_month_day_day__label">S</span></div>
                    <div class="task_month_day_day" id="line_20220220" var_left="1740" is_hidden="true" style="margin-left: 1740px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1740px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">20</span><span class="task_month_day_day__label">S</span></div>
                    <div class="day_lines new_week_line" id="line_20220221" var_left="1762" date="2022-02-21" style="margin-left: 1762px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday new_week_line" style="margin-left: 1762px; width: 22px;"><span class="task_month_day_day__number">21</span><span class="task_month_day_day__label">M</span></div>
                    <div class="day_lines" id="line_20220222" var_left="1784" date="2022-02-22" style="margin-left: 1784px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1784px; width: 22px;"><span class="task_month_day_day__number">22</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220223" var_left="1806" date="2022-02-23" style="margin-left: 1806px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1806px; width: 22px;"><span class="task_month_day_day__number">23</span><span class="task_month_day_day__label">W</span></div>
                    <div class="day_lines" id="line_20220224" var_left="1828" date="2022-02-24" style="margin-left: 1828px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1828px; width: 22px;"><span class="task_month_day_day__number">24</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220225" var_left="1850" date="2022-02-25" style="margin-left: 1850px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1850px; width: 22px;"><span class="task_month_day_day__number">25</span><span class="task_month_day_day__label">F</span></div>
                    <div class="task_month_day_day" id="line_20220226" var_left="1850" is_hidden="true" style="margin-left: 1850px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1850px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">26</span><span class="task_month_day_day__label">S</span></div>
                    <div class="task_month_day_day" id="line_20220227" var_left="1850" is_hidden="true" style="margin-left: 1850px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1850px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">27</span><span class="task_month_day_day__label">S</span></div>
                    <div class="day_lines new_week_line" id="line_20220228" var_left="1872" date="2022-02-28" style="margin-left: 1872px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday new_week_line" style="margin-left: 1872px; width: 22px;"><span class="task_month_day_day__number">28</span><span class="task_month_day_day__label">M</span></div>
                    <div class="month_lines month_lines" id="line_20220301" var_left="1894" date="2022-03-01" style="margin-left: 1894px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday month_lines" style="margin-left: 1894px; width: 22px;"><span class="task_month_day_day__number">1</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220302" var_left="1916" date="2022-03-02" style="margin-left: 1916px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1916px; width: 22px;"><span class="task_month_day_day__number">2</span><span class="task_month_day_day__label">W</span></div>
                    <div class="day_lines" id="line_20220303" var_left="1938" date="2022-03-03" style="margin-left: 1938px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1938px; width: 22px;"><span class="task_month_day_day__number">3</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220304" var_left="1960" date="2022-03-04" style="margin-left: 1960px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1960px; width: 22px;"><span class="task_month_day_day__number">4</span><span class="task_month_day_day__label">F</span></div>
                    <div class="task_month_day_day" id="line_20220305" var_left="1960" is_hidden="true" style="margin-left: 1960px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1960px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">5</span><span class="task_month_day_day__label">S</span></div>
                    <div class="task_month_day_day" id="line_20220306" var_left="1960" is_hidden="true" style="margin-left: 1960px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 1960px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">6</span><span class="task_month_day_day__label">S</span></div>
                    <div class="day_lines new_week_line" id="line_20220307" var_left="1982" date="2022-03-07" style="margin-left: 1982px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday new_week_line" style="margin-left: 1982px; width: 22px;"><span class="task_month_day_day__number">7</span><span class="task_month_day_day__label">M</span></div>
                    <div class="day_lines" id="line_20220308" var_left="2004" date="2022-03-08" style="margin-left: 2004px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2004px; width: 22px;"><span class="task_month_day_day__number">8</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220309" var_left="2026" date="2022-03-09" style="margin-left: 2026px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2026px; width: 22px;"><span class="task_month_day_day__number">9</span><span class="task_month_day_day__label">W</span></div>
                    <div class="day_lines" id="line_20220310" var_left="2048" date="2022-03-10" style="margin-left: 2048px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2048px; width: 22px;"><span class="task_month_day_day__number">10</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220311" var_left="2070" date="2022-03-11" style="margin-left: 2070px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2070px; width: 22px;"><span class="task_month_day_day__number">11</span><span class="task_month_day_day__label">F</span></div>
                    <div class="task_month_day_day" id="line_20220312" var_left="2070" is_hidden="true" style="margin-left: 2070px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2070px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">12</span><span class="task_month_day_day__label">S</span></div>
                    <div class="task_month_day_day" id="line_20220313" var_left="2070" is_hidden="true" style="margin-left: 2070px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2070px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">13</span><span class="task_month_day_day__label">S</span></div>
                    <div class="day_lines new_week_line" id="line_20220314" var_left="2092" date="2022-03-14" style="margin-left: 2092px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday new_week_line" style="margin-left: 2092px; width: 22px;"><span class="task_month_day_day__number">14</span><span class="task_month_day_day__label">M</span></div>
                    <div class="day_lines" id="line_20220315" var_left="2114" date="2022-03-15" style="margin-left: 2114px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2114px; width: 22px;"><span class="task_month_day_day__number">15</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220316" var_left="2136" date="2022-03-16" style="margin-left: 2136px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2136px; width: 22px;"><span class="task_month_day_day__number">16</span><span class="task_month_day_day__label">W</span></div>
                    <div class="day_lines" id="line_20220317" var_left="2158" date="2022-03-17" style="margin-left: 2158px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2158px; width: 22px;"><span class="task_month_day_day__number">17</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220318" var_left="2180" date="2022-03-18" style="margin-left: 2180px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2180px; width: 22px;"><span class="task_month_day_day__number">18</span><span class="task_month_day_day__label">F</span></div>
                    <div class="task_month_day_day" id="line_20220319" var_left="2180" is_hidden="true" style="margin-left: 2180px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2180px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">19</span><span class="task_month_day_day__label">S</span></div>
                    <div class="task_month_day_day" id="line_20220320" var_left="2180" is_hidden="true" style="margin-left: 2180px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2180px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">20</span><span class="task_month_day_day__label">S</span></div>
                    <div class="day_lines new_week_line" id="line_20220321" var_left="2202" date="2022-03-21" style="margin-left: 2202px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday new_week_line" style="margin-left: 2202px; width: 22px;"><span class="task_month_day_day__number">21</span><span class="task_month_day_day__label">M</span></div>
                    <div class="day_lines" id="line_20220322" var_left="2224" date="2022-03-22" style="margin-left: 2224px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2224px; width: 22px;"><span class="task_month_day_day__number">22</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220323" var_left="2246" date="2022-03-23" style="margin-left: 2246px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2246px; width: 22px;"><span class="task_month_day_day__number">23</span><span class="task_month_day_day__label">W</span></div>
                    <div class="day_lines" id="line_20220324" var_left="2268" date="2022-03-24" style="margin-left: 2268px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2268px; width: 22px;"><span class="task_month_day_day__number">24</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220325" var_left="2290" date="2022-03-25" style="margin-left: 2290px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2290px; width: 22px;"><span class="task_month_day_day__number">25</span><span class="task_month_day_day__label">F</span></div>
                    <div class="task_month_day_day" id="line_20220326" var_left="2290" is_hidden="true" style="margin-left: 2290px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2290px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">26</span><span class="task_month_day_day__label">S</span></div>
                    <div class="task_month_day_day" id="line_20220327" var_left="2290" is_hidden="true" style="margin-left: 2290px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2290px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">27</span><span class="task_month_day_day__label">S</span></div>
                    <div class="day_lines new_week_line" id="line_20220328" var_left="2312" date="2022-03-28" style="margin-left: 2312px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday new_week_line" style="margin-left: 2312px; width: 22px;"><span class="task_month_day_day__number">28</span><span class="task_month_day_day__label">M</span></div>
                    <div class="day_lines" id="line_20220329" var_left="2334" date="2022-03-29" style="margin-left: 2334px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2334px; width: 22px;"><span class="task_month_day_day__number">29</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220330" var_left="2356" date="2022-03-30" style="margin-left: 2356px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2356px; width: 22px;"><span class="task_month_day_day__number">30</span><span class="task_month_day_day__label">W</span></div>
                    <div class="day_lines" id="line_20220331" var_left="2378" date="2022-03-31" style="margin-left: 2378px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2378px; width: 22px;"><span class="task_month_day_day__number">31</span><span class="task_month_day_day__label">T</span></div>
                    <div class="month_lines month_lines" id="line_20220401" var_left="2400" date="2022-04-01" style="margin-left: 2400px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday month_lines" style="margin-left: 2400px; width: 22px;"><span class="task_month_day_day__number">1</span><span class="task_month_day_day__label">F</span></div>
                    <div class="task_month_day_day" id="line_20220402" var_left="2400" is_hidden="true" style="margin-left: 2400px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2400px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">2</span><span class="task_month_day_day__label">S</span></div>
                    <div class="task_month_day_day" id="line_20220403" var_left="2400" is_hidden="true" style="margin-left: 2400px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2400px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">3</span><span class="task_month_day_day__label">S</span></div>
                    <div class="day_lines new_week_line" id="line_20220404" var_left="2422" date="2022-04-04" style="margin-left: 2422px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday new_week_line" style="margin-left: 2422px; width: 22px;"><span class="task_month_day_day__number">4</span><span class="task_month_day_day__label">M</span></div>
                    <div class="day_lines" id="line_20220405" var_left="2444" date="2022-04-05" style="margin-left: 2444px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2444px; width: 22px;"><span class="task_month_day_day__number">5</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220406" var_left="2466" date="2022-04-06" style="margin-left: 2466px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2466px; width: 22px;"><span class="task_month_day_day__number">6</span><span class="task_month_day_day__label">W</span></div>
                    <div class="day_lines" id="line_20220407" var_left="2488" date="2022-04-07" style="margin-left: 2488px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2488px; width: 22px;"><span class="task_month_day_day__number">7</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220408" var_left="2510" date="2022-04-08" style="margin-left: 2510px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2510px; width: 22px;"><span class="task_month_day_day__number">8</span><span class="task_month_day_day__label">F</span></div>
                    <div class="task_month_day_day" id="line_20220409" var_left="2510" is_hidden="true" style="margin-left: 2510px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2510px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">9</span><span class="task_month_day_day__label">S</span></div>
                    <div class="task_month_day_day" id="line_20220410" var_left="2510" is_hidden="true" style="margin-left: 2510px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2510px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">10</span><span class="task_month_day_day__label">S</span></div>
                    <div class="day_lines new_week_line" id="line_20220411" var_left="2532" date="2022-04-11" style="margin-left: 2532px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday new_week_line" style="margin-left: 2532px; width: 22px;"><span class="task_month_day_day__number">11</span><span class="task_month_day_day__label">M</span></div>
                    <div class="day_lines" id="line_20220412" var_left="2554" date="2022-04-12" style="margin-left: 2554px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2554px; width: 22px;"><span class="task_month_day_day__number">12</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220413" var_left="2576" date="2022-04-13" style="margin-left: 2576px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2576px; width: 22px;"><span class="task_month_day_day__number">13</span><span class="task_month_day_day__label">W</span></div>
                    <div class="day_lines" id="line_20220414" var_left="2598" date="2022-04-14" style="margin-left: 2598px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2598px; width: 22px;"><span class="task_month_day_day__number">14</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220415" var_left="2620" date="2022-04-15" style="margin-left: 2620px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2620px; width: 22px;"><span class="task_month_day_day__number">15</span><span class="task_month_day_day__label">F</span></div>
                    <div class="task_month_day_day" id="line_20220416" var_left="2620" is_hidden="true" style="margin-left: 2620px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2620px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">16</span><span class="task_month_day_day__label">S</span></div>
                    <div class="task_month_day_day" id="line_20220417" var_left="2620" is_hidden="true" style="margin-left: 2620px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2620px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">17</span><span class="task_month_day_day__label">S</span></div>
                    <div class="day_lines new_week_line" id="line_20220418" var_left="2642" date="2022-04-18" style="margin-left: 2642px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday new_week_line" style="margin-left: 2642px; width: 22px;"><span class="task_month_day_day__number">18</span><span class="task_month_day_day__label">M</span></div>
                    <div class="day_lines" id="line_20220419" var_left="2664" date="2022-04-19" style="margin-left: 2664px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2664px; width: 22px;"><span class="task_month_day_day__number">19</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220420" var_left="2686" date="2022-04-20" style="margin-left: 2686px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2686px; width: 22px;"><span class="task_month_day_day__number">20</span><span class="task_month_day_day__label">W</span></div>
                    <div class="day_lines" id="line_20220421" var_left="2708" date="2022-04-21" style="margin-left: 2708px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2708px; width: 22px;"><span class="task_month_day_day__number">21</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220422" var_left="2730" date="2022-04-22" style="margin-left: 2730px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2730px; width: 22px;"><span class="task_month_day_day__number">22</span><span class="task_month_day_day__label">F</span></div>
                    <div class="task_month_day_day" id="line_20220423" var_left="2730" is_hidden="true" style="margin-left: 2730px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2730px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">23</span><span class="task_month_day_day__label">S</span></div>
                    <div class="task_month_day_day" id="line_20220424" var_left="2730" is_hidden="true" style="margin-left: 2730px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2730px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">24</span><span class="task_month_day_day__label">S</span></div>
                    <div class="day_lines new_week_line" id="line_20220425" var_left="2752" date="2022-04-25" style="margin-left: 2752px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday new_week_line" style="margin-left: 2752px; width: 22px;"><span class="task_month_day_day__number">25</span><span class="task_month_day_day__label">M</span></div>
                    <div class="day_lines" id="line_20220426" var_left="2774" date="2022-04-26" style="margin-left: 2774px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2774px; width: 22px;"><span class="task_month_day_day__number">26</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220427" var_left="2796" date="2022-04-27" style="margin-left: 2796px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2796px; width: 22px;"><span class="task_month_day_day__number">27</span><span class="task_month_day_day__label">W</span></div>
                    <div class="day_lines" id="line_20220428" var_left="2818" date="2022-04-28" style="margin-left: 2818px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2818px; width: 22px;"><span class="task_month_day_day__number">28</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220429" var_left="2840" date="2022-04-29" style="margin-left: 2840px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2840px; width: 22px;"><span class="task_month_day_day__number">29</span><span class="task_month_day_day__label">F</span></div>
                    <div class="task_month_day_day" id="line_20220430" var_left="2840" is_hidden="true" style="margin-left: 2840px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2840px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">30</span><span class="task_month_day_day__label">S</span></div>
                    <div class="task_month_day_day" id="line_20220501" var_left="2840" is_hidden="true" style="margin-left: 2840px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2840px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">1</span><span class="task_month_day_day__label">S</span></div>
                    <div class="day_lines month_lines new_week_line" id="line_20220502" var_left="2862" date="2022-05-02" style="margin-left: 2862px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday month_lines new_week_line" style="margin-left: 2862px; width: 22px;"><span class="task_month_day_day__number">2</span><span class="task_month_day_day__label">M</span></div>
                    <div class="day_lines" id="line_20220503" var_left="2884" date="2022-05-03" style="margin-left: 2884px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2884px; width: 22px;"><span class="task_month_day_day__number">3</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220504" var_left="2906" date="2022-05-04" style="margin-left: 2906px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2906px; width: 22px;"><span class="task_month_day_day__number">4</span><span class="task_month_day_day__label">W</span></div>
                    <div class="day_lines" id="line_20220505" var_left="2928" date="2022-05-05" style="margin-left: 2928px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2928px; width: 22px;"><span class="task_month_day_day__number">5</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220506" var_left="2950" date="2022-05-06" style="margin-left: 2950px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2950px; width: 22px;"><span class="task_month_day_day__number">6</span><span class="task_month_day_day__label">F</span></div>
                    <div class="task_month_day_day" id="line_20220507" var_left="2950" is_hidden="true" style="margin-left: 2950px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2950px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">7</span><span class="task_month_day_day__label">S</span></div>
                    <div class="task_month_day_day" id="line_20220508" var_left="2950" is_hidden="true" style="margin-left: 2950px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2950px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">8</span><span class="task_month_day_day__label">S</span></div>
                    <div class="day_lines new_week_line" id="line_20220509" var_left="2972" date="2022-05-09" style="margin-left: 2972px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday new_week_line" style="margin-left: 2972px; width: 22px;"><span class="task_month_day_day__number">9</span><span class="task_month_day_day__label">M</span></div>
                    <div class="day_lines" id="line_20220510" var_left="2994" date="2022-05-10" style="margin-left: 2994px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 2994px; width: 22px;"><span class="task_month_day_day__number">10</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220511" var_left="3016" date="2022-05-11" style="margin-left: 3016px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3016px; width: 22px;"><span class="task_month_day_day__number">11</span><span class="task_month_day_day__label">W</span></div>
                    <div class="day_lines" id="line_20220512" var_left="3038" date="2022-05-12" style="margin-left: 3038px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3038px; width: 22px;"><span class="task_month_day_day__number">12</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220513" var_left="3060" date="2022-05-13" style="margin-left: 3060px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3060px; width: 22px;"><span class="task_month_day_day__number">13</span><span class="task_month_day_day__label">F</span></div>
                    <div class="task_month_day_day" id="line_20220514" var_left="3060" is_hidden="true" style="margin-left: 3060px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3060px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">14</span><span class="task_month_day_day__label">S</span></div>
                    <div class="task_month_day_day" id="line_20220515" var_left="3060" is_hidden="true" style="margin-left: 3060px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3060px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">15</span><span class="task_month_day_day__label">S</span></div>
                    <div class="day_lines new_week_line" id="line_20220516" var_left="3082" date="2022-05-16" style="margin-left: 3082px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday new_week_line" style="margin-left: 3082px; width: 22px;"><span class="task_month_day_day__number">16</span><span class="task_month_day_day__label">M</span></div>
                    <div class="day_lines" id="line_20220517" var_left="3104" date="2022-05-17" style="margin-left: 3104px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3104px; width: 22px;"><span class="task_month_day_day__number">17</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220518" var_left="3126" date="2022-05-18" style="margin-left: 3126px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3126px; width: 22px;"><span class="task_month_day_day__number">18</span><span class="task_month_day_day__label">W</span></div>
                    <div class="day_lines" id="line_20220519" var_left="3148" date="2022-05-19" style="margin-left: 3148px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3148px; width: 22px;"><span class="task_month_day_day__number">19</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220520" var_left="3170" date="2022-05-20" style="margin-left: 3170px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3170px; width: 22px;"><span class="task_month_day_day__number">20</span><span class="task_month_day_day__label">F</span></div>
                    <div class="task_month_day_day" id="line_20220521" var_left="3170" is_hidden="true" style="margin-left: 3170px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3170px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">21</span><span class="task_month_day_day__label">S</span></div>
                    <div class="task_month_day_day" id="line_20220522" var_left="3170" is_hidden="true" style="margin-left: 3170px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3170px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">22</span><span class="task_month_day_day__label">S</span></div>
                    <div class="day_lines new_week_line" id="line_20220523" var_left="3192" date="2022-05-23" style="margin-left: 3192px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday new_week_line" style="margin-left: 3192px; width: 22px;"><span class="task_month_day_day__number">23</span><span class="task_month_day_day__label">M</span></div>
                    <div class="day_lines" id="line_20220524" var_left="3214" date="2022-05-24" style="margin-left: 3214px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3214px; width: 22px;"><span class="task_month_day_day__number">24</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220525" var_left="3236" date="2022-05-25" style="margin-left: 3236px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3236px; width: 22px;"><span class="task_month_day_day__number">25</span><span class="task_month_day_day__label">W</span></div>
                    <div class="day_lines" id="line_20220526" var_left="3258" date="2022-05-26" style="margin-left: 3258px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3258px; width: 22px;"><span class="task_month_day_day__number">26</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220527" var_left="3280" date="2022-05-27" style="margin-left: 3280px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3280px; width: 22px;"><span class="task_month_day_day__number">27</span><span class="task_month_day_day__label">F</span></div>
                    <div class="task_month_day_day" id="line_20220528" var_left="3280" is_hidden="true" style="margin-left: 3280px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3280px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">28</span><span class="task_month_day_day__label">S</span></div>
                    <div class="task_month_day_day" id="line_20220529" var_left="3280" is_hidden="true" style="margin-left: 3280px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3280px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">29</span><span class="task_month_day_day__label">S</span></div>
                    <div class="day_lines new_week_line" id="line_20220530" var_left="3302" date="2022-05-30" style="margin-left: 3302px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday new_week_line" style="margin-left: 3302px; width: 22px;"><span class="task_month_day_day__number">30</span><span class="task_month_day_day__label">M</span></div>
                    <div class="day_lines" id="line_20220531" var_left="3324" date="2022-05-31" style="margin-left: 3324px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3324px; width: 22px;"><span class="task_month_day_day__number">31</span><span class="task_month_day_day__label">T</span></div>
                    <div class="month_lines month_lines" id="line_20220601" var_left="3346" date="2022-06-01" style="margin-left: 3346px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday month_lines" style="margin-left: 3346px; width: 22px;"><span class="task_month_day_day__number">1</span><span class="task_month_day_day__label">W</span></div>
                    <div class="day_lines" id="line_20220602" var_left="3368" date="2022-06-02" style="margin-left: 3368px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3368px; width: 22px;"><span class="task_month_day_day__number">2</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220603" var_left="3390" date="2022-06-03" style="margin-left: 3390px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3390px; width: 22px;"><span class="task_month_day_day__number">3</span><span class="task_month_day_day__label">F</span></div>
                    <div class="task_month_day_day" id="line_20220604" var_left="3390" is_hidden="true" style="margin-left: 3390px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3390px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">4</span><span class="task_month_day_day__label">S</span></div>
                    <div class="task_month_day_day" id="line_20220605" var_left="3390" is_hidden="true" style="margin-left: 3390px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3390px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">5</span><span class="task_month_day_day__label">S</span></div>
                    <div class="day_lines new_week_line" id="line_20220606" var_left="3412" date="2022-06-06" style="margin-left: 3412px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday new_week_line" style="margin-left: 3412px; width: 22px;"><span class="task_month_day_day__number">6</span><span class="task_month_day_day__label">M</span></div>
                    <div class="day_lines" id="line_20220607" var_left="3434" date="2022-06-07" style="margin-left: 3434px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3434px; width: 22px;"><span class="task_month_day_day__number">7</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220608" var_left="3456" date="2022-06-08" style="margin-left: 3456px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3456px; width: 22px;"><span class="task_month_day_day__number">8</span><span class="task_month_day_day__label">W</span></div>
                    <div class="day_lines" id="line_20220609" var_left="3478" date="2022-06-09" style="margin-left: 3478px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3478px; width: 22px;"><span class="task_month_day_day__number">9</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220610" var_left="3500" date="2022-06-10" style="margin-left: 3500px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3500px; width: 22px;"><span class="task_month_day_day__number">10</span><span class="task_month_day_day__label">F</span></div>
                    <div class="task_month_day_day" id="line_20220611" var_left="3500" is_hidden="true" style="margin-left: 3500px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3500px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">11</span><span class="task_month_day_day__label">S</span></div>
                    <div class="task_month_day_day" id="line_20220612" var_left="3500" is_hidden="true" style="margin-left: 3500px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3500px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">12</span><span class="task_month_day_day__label">S</span></div>
                    <div class="day_lines new_week_line" id="line_20220613" var_left="3522" date="2022-06-13" style="margin-left: 3522px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday new_week_line" style="margin-left: 3522px; width: 22px;"><span class="task_month_day_day__number">13</span><span class="task_month_day_day__label">M</span></div>
                    <div class="day_lines" id="line_20220614" var_left="3544" date="2022-06-14" style="margin-left: 3544px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3544px; width: 22px;"><span class="task_month_day_day__number">14</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220615" var_left="3566" date="2022-06-15" style="margin-left: 3566px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3566px; width: 22px;"><span class="task_month_day_day__number">15</span><span class="task_month_day_day__label">W</span></div>
                    <div class="day_lines" id="line_20220616" var_left="3588" date="2022-06-16" style="margin-left: 3588px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3588px; width: 22px;"><span class="task_month_day_day__number">16</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220617" var_left="3610" date="2022-06-17" style="margin-left: 3610px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3610px; width: 22px;"><span class="task_month_day_day__number">17</span><span class="task_month_day_day__label">F</span></div>
                    <div class="task_month_day_day" id="line_20220618" var_left="3610" is_hidden="true" style="margin-left: 3610px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3610px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">18</span><span class="task_month_day_day__label">S</span></div>
                    <div class="task_month_day_day" id="line_20220619" var_left="3610" is_hidden="true" style="margin-left: 3610px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3610px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">19</span><span class="task_month_day_day__label">S</span></div>
                    <div class="day_lines new_week_line" id="line_20220620" var_left="3632" date="2022-06-20" style="margin-left: 3632px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday new_week_line" style="margin-left: 3632px; width: 22px;"><span class="task_month_day_day__number">20</span><span class="task_month_day_day__label">M</span></div>
                    <div class="day_lines" id="line_20220621" var_left="3654" date="2022-06-21" style="margin-left: 3654px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3654px; width: 22px;"><span class="task_month_day_day__number">21</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220622" var_left="3676" date="2022-06-22" style="margin-left: 3676px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3676px; width: 22px;"><span class="task_month_day_day__number">22</span><span class="task_month_day_day__label">W</span></div>
                    <div class="day_lines" id="line_20220623" var_left="3698" date="2022-06-23" style="margin-left: 3698px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3698px; width: 22px;"><span class="task_month_day_day__number">23</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220624" var_left="3720" date="2022-06-24" style="margin-left: 3720px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3720px; width: 22px;"><span class="task_month_day_day__number">24</span><span class="task_month_day_day__label">F</span></div>
                    <div class="task_month_day_day" id="line_20220625" var_left="3720" is_hidden="true" style="margin-left: 3720px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3720px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">25</span><span class="task_month_day_day__label">S</span></div>
                    <div class="task_month_day_day" id="line_20220626" var_left="3720" is_hidden="true" style="margin-left: 3720px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3720px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">26</span><span class="task_month_day_day__label">S</span></div>
                    <div class="day_lines new_week_line" id="line_20220627" var_left="3742" date="2022-06-27" style="margin-left: 3742px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday new_week_line" style="margin-left: 3742px; width: 22px;"><span class="task_month_day_day__number">27</span><span class="task_month_day_day__label">M</span></div>
                    <div class="day_lines" id="line_20220628" var_left="3764" date="2022-06-28" style="margin-left: 3764px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3764px; width: 22px;"><span class="task_month_day_day__number">28</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220629" var_left="3786" date="2022-06-29" style="margin-left: 3786px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3786px; width: 22px;"><span class="task_month_day_day__number">29</span><span class="task_month_day_day__label">W</span></div>
                    <div class="day_lines" id="line_20220630" var_left="3808" date="2022-06-30" style="margin-left: 3808px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3808px; width: 22px;"><span class="task_month_day_day__number">30</span><span class="task_month_day_day__label">T</span></div>
                    <div class="month_lines month_lines" id="line_20220701" var_left="3830" date="2022-07-01" style="margin-left: 3830px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday month_lines" style="margin-left: 3830px; width: 22px;"><span class="task_month_day_day__number">1</span><span class="task_month_day_day__label">F</span></div>
                    <div class="task_month_day_day" id="line_20220702" var_left="3830" is_hidden="true" style="margin-left: 3830px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3830px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">2</span><span class="task_month_day_day__label">S</span></div>
                    <div class="task_month_day_day" id="line_20220703" var_left="3830" is_hidden="true" style="margin-left: 3830px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3830px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">3</span><span class="task_month_day_day__label">S</span></div>
                    <div class="day_lines new_week_line" id="line_20220704" var_left="3852" date="2022-07-04" style="margin-left: 3852px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday new_week_line" style="margin-left: 3852px; width: 22px;"><span class="task_month_day_day__number">4</span><span class="task_month_day_day__label">M</span></div>
                    <div class="day_lines" id="line_20220705" var_left="3874" date="2022-07-05" style="margin-left: 3874px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3874px; width: 22px;"><span class="task_month_day_day__number">5</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220706" var_left="3896" date="2022-07-06" style="margin-left: 3896px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3896px; width: 22px;"><span class="task_month_day_day__number">6</span><span class="task_month_day_day__label">W</span></div>
                    <div class="day_lines" id="line_20220707" var_left="3918" date="2022-07-07" style="margin-left: 3918px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3918px; width: 22px;"><span class="task_month_day_day__number">7</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220708" var_left="3940" date="2022-07-08" style="margin-left: 3940px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3940px; width: 22px;"><span class="task_month_day_day__number">8</span><span class="task_month_day_day__label">F</span></div>
                    <div class="task_month_day_day" id="line_20220709" var_left="3940" is_hidden="true" style="margin-left: 3940px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3940px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">9</span><span class="task_month_day_day__label">S</span></div>
                    <div class="task_month_day_day" id="line_20220710" var_left="3940" is_hidden="true" style="margin-left: 3940px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3940px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">10</span><span class="task_month_day_day__label">S</span></div>
                    <div class="day_lines new_week_line" id="line_20220711" var_left="3962" date="2022-07-11" style="margin-left: 3962px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday new_week_line" style="margin-left: 3962px; width: 22px;"><span class="task_month_day_day__number">11</span><span class="task_month_day_day__label">M</span></div>
                    <div class="day_lines" id="line_20220712" var_left="3984" date="2022-07-12" style="margin-left: 3984px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 3984px; width: 22px;"><span class="task_month_day_day__number">12</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220713" var_left="4006" date="2022-07-13" style="margin-left: 4006px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 4006px; width: 22px;"><span class="task_month_day_day__number">13</span><span class="task_month_day_day__label">W</span></div>
                    <div class="day_lines" id="line_20220714" var_left="4028" date="2022-07-14" style="margin-left: 4028px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 4028px; width: 22px;"><span class="task_month_day_day__number">14</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220715" var_left="4050" date="2022-07-15" style="margin-left: 4050px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 4050px; width: 22px;"><span class="task_month_day_day__number">15</span><span class="task_month_day_day__label">F</span></div>
                    <div class="task_month_day_day" id="line_20220716" var_left="4050" is_hidden="true" style="margin-left: 4050px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 4050px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">16</span><span class="task_month_day_day__label">S</span></div>
                    <div class="task_month_day_day" id="line_20220717" var_left="4050" is_hidden="true" style="margin-left: 4050px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 4050px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">17</span><span class="task_month_day_day__label">S</span></div>
                    <div class="day_lines new_week_line" id="line_20220718" var_left="4072" date="2022-07-18" style="margin-left: 4072px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday new_week_line" style="margin-left: 4072px; width: 22px;"><span class="task_month_day_day__number">18</span><span class="task_month_day_day__label">M</span></div>
                    <div class="day_lines" id="line_20220719" var_left="4094" date="2022-07-19" style="margin-left: 4094px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 4094px; width: 22px;"><span class="task_month_day_day__number">19</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220720" var_left="4116" date="2022-07-20" style="margin-left: 4116px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 4116px; width: 22px;"><span class="task_month_day_day__number">20</span><span class="task_month_day_day__label">W</span></div>
                    <div class="day_lines" id="line_20220721" var_left="4138" date="2022-07-21" style="margin-left: 4138px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 4138px; width: 22px;"><span class="task_month_day_day__number">21</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220722" var_left="4160" date="2022-07-22" style="margin-left: 4160px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 4160px; width: 22px;"><span class="task_month_day_day__number">22</span><span class="task_month_day_day__label">F</span></div>
                    <div class="task_month_day_day" id="line_20220723" var_left="4160" is_hidden="true" style="margin-left: 4160px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 4160px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">23</span><span class="task_month_day_day__label">S</span></div>
                    <div class="task_month_day_day" id="line_20220724" var_left="4160" is_hidden="true" style="margin-left: 4160px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 4160px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">24</span><span class="task_month_day_day__label">S</span></div>
                    <div class="day_lines new_week_line" id="line_20220725" var_left="4182" date="2022-07-25" style="margin-left: 4182px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday new_week_line" style="margin-left: 4182px; width: 22px;"><span class="task_month_day_day__number">25</span><span class="task_month_day_day__label">M</span></div>
                    <div class="day_lines" id="line_20220726" var_left="4204" date="2022-07-26" style="margin-left: 4204px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 4204px; width: 22px;"><span class="task_month_day_day__number">26</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220727" var_left="4226" date="2022-07-27" style="margin-left: 4226px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 4226px; width: 22px;"><span class="task_month_day_day__number">27</span><span class="task_month_day_day__label">W</span></div>
                    <div class="day_lines" id="line_20220728" var_left="4248" date="2022-07-28" style="margin-left: 4248px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 4248px; width: 22px;"><span class="task_month_day_day__number">28</span><span class="task_month_day_day__label">T</span></div>
                    <div class="day_lines" id="line_20220729" var_left="4270" date="2022-07-29" style="margin-left: 4270px; width: 22px; overflow: visible;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 4270px; width: 22px;"><span class="task_month_day_day__number">29</span><span class="task_month_day_day__label">F</span></div>
                    <div class="task_month_day_day" id="line_20220730" var_left="4270" is_hidden="true" style="margin-left: 4270px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 4270px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">30</span><span class="task_month_day_day__label">S</span></div>
                    <div class="task_month_day_day" id="line_20220731" var_left="4270" is_hidden="true" style="margin-left: 4270px; width: 22px; overflow: visible; border-left: none;"></div>
                    <div class="task_month_day_day task_month_weekday" style="margin-left: 4270px; width: 22px; visibility: hidden; z-index: -100;"><span class="task_month_day_day__number">31</span><span class="task_month_day_day__label">S</span></div>
                    <div class="month_lines" style="margin-left: 4292px; width: 0px; overflow: visible;"></div>
                </div>
                <div id="task_box" class="task_wrapper" style="position: relative; top: 0px; left: 0px; width: 4288px; max-width: 4288px; min-height: 1055px;">
                    <div id="cancel_clicker" class="hidden"></div>
                    <div class="project_bar" id="project_2933054" project_id="2933054">
                        <div class="project_in_chart" id="project_div_2933054" project_id="2933054" type="project" type_id="2933054" mousedown="0" var_left="1168" def_left="1168" var_width="109" def_width="109" style="margin-left: 1168px; width: 109px; left: 0px;"></div>
                    </div>
                    <div id="project_bar_target_2933054" class="project_target">
                        <div id="category_23938234" class="category" group_id="23938234">
                            <div id="category_div_23938234" class="category_in_chart radius" group_id="23938234" type="group" type_id="23938234" mousedown="0" var_left="1168" def_left="1168" var_width="111" def_width="111" style="margin-left: 1168px; left: 0px; width: 111px;">
                                <div class="group_background">
                                    <div class="hidden" style="width: 0px;"></div>
                                </div>
                                <div class="collapse_arrow" title="Collapse Group"><i class="tg-icon triangle-down" id="group_chart_arrow_23938234"></i></div>
                            </div>
                            <div class="badges blue2" group_id="23938234" is_badge="1" id="group_badge_23938234" style="left: 0px; margin-left: 1281px;">
                                <div class="edit_menu" group_id="23938234">
                                    <div class="badge_block" title="Edit Group"><i class="tg-icon edit-pencil"></i></div>
                                    <div class="badge_block edit_color" group_id="23938234" id="group_color_23938234" title="Adjust Color of All Tasks in Group"><span class="color_badge"></span></div>
                                    <div class="quick_add_control badge_block" id="quick_add_category_23938234" type="group" type_id="23938234"><i class="tg-icon dot-menu"></i></div>
                                </div>
                            </div>
                        </div>
                        <div id="group_bar_target_23938234" group_hidden="0">
                            <div id="task_112103584" class="task" task_id="112103584">
                                <div id="task_div_112103584" class="task_in_chart radius blue2" task_id="112103584" category_id="23938234" def_left="1168" var_left="1168" def_width="111" var_width="111" type="task" type_id="112103584" mousedown="0" style="position: absolute; margin-left: 1168px; left: 0px; width: 111px;">
                                    <div class="progress_bar hidden" style="width: 0%;"></div>
                                </div>
                                <div class="badges blue2" task_id="112103584" is_badge="1" id="task_badge_112103584" style="margin-left: 1281px; left: 0px;">
                                    <div class="cp_create_front cp_create" id="dependency_front_112103584" task_id="112103584" front_minus="30" title="Click and drag to another task to create a dependency" style="margin-left: -141px;"><span class="dot"></span></div>
                                    <div class="extend extend_front" task_id="112103584" front_minus="11" title="Click and drag to change start date" style="margin-left: -122px;">
                                        <div class="extend_line"></div>
                                    </div>
                                    <div class="extend extend_back" task_id="112103584" title="Click and drag to change end date">
                                        <div class="extend_line"></div>
                                    </div>
                                    <div class="cp_create_back cp_create" id="dependency_back_112103584" task_id="112103584" title="click and drag to another task to create dependency." style="margin-left: 6px;"><span class="dot"></span></div>
                                    <div class="edit_menu" task_id="112103584">
                                        <div class="badge_block multi_hide" title="Edit Task"><i class="tg-icon edit-pencil"></i></div>
                                        <div class="badge_block edit_color" task_id="112103584" id="task_color_112103584" title="Change Task Bar Color"><span class="color_badge"></span></div>
                                        <div class="badge_block" id="task_resources_112103584" title="Assign Task"><i class="tg-icon user"></i></div>
                                        <div class="quick_add_control badge_block" id="quick_add_task_112103584" type="task" type_id="112103584"><i class="tg-icon dot-menu"></i></div>
                                    </div>
                                    <div class="task_resources" id="task_resources_list_112103584"></div>
                                </div>
                                <div class="hidden" id="left_arrow_task_112103584" task_id="112103584"><i class="fa fa fa-angle-left"></i></div>
                                <div class="hidden" id="right_arrow_task_112103584" task_id="112103584"><i class="fa fa fa-angle-right"></i></div>
                            </div>
                            <div class="task super_quick_add" task_id="quick_add_23938234" id="task_quick_add_23938234" group_id="23938234">
                                <div class="task_name"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="critical_paths" style="top: 0px; left: 0px; width: 4288px;"></div>
                <div id="utility_box" style="top: 0px; left: 0px; width: 4288px;"></div>
            </div>
        </div>
    </div>
</section>

<style>
    #gantt_location {
        background: #fff;
        clear: both;
        position: relative;
    }
    #gantt_chart, #task_header {
        font-size: 0.7857em;
        margin: 0 0% 1em;
    }
    #task_header {
        background: #fff;
        border-bottom: 1px #d2d2d2 solid;
        border-color: #eaeaea !important;
        border-top: 1px #b2b2b2 solid;
        box-sizing: border-box;
        color: #505050;
        height: 36px;
        margin-bottom: 0;
        overflow: hidden;
        position: fixed;
        top: 117px;
        width: 100%;
        z-index: 10000;
    }
    #gantt_chart {
        margin-top: 20px;
        font-size: 13px;
    }
    .task_months {
        border-left: 1px #ccc solid;
        color: #62676d;
        height: 36px;
        left: 18em;
        line-height: 1.5em;
        overflow: hidden;
        position: absolute;
        text-align: center;
        top: 0;
        white-space: nowrap;
    }
</style>