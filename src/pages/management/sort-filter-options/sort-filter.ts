
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { IonicPage, ActionSheetController } from 'ionic-angular';
import { ComplaintService } from '../../../providers/complaint.service';

@IonicPage()
@Component({
    selector: 'sort-filter',
    template: `   
    <ion-grid no-padding>
        <ion-row>
            <ion-col no-padding>
                <button full ion-button (click)="onSort()" [style.background-color]="sortSelected ? 'grey': ''" icon-start>
                    <ion-icon name="arrow-round-down"></ion-icon><ion-icon name="arrow-round-up"></ion-icon>
                Sort
                </button>
            </ion-col>

            <ion-col no-padding>
                    <button full ion-button (click)="onFilter()" [style.background-color]="filterSelected ? 'grey': ''" icon-start>
                        <ion-icon name="funnel"></ion-icon>
                    Filter
                    </button>
            </ion-col>  
        </ion-row>
    </ion-grid>
            `,
    styles: [`
        button{
            margin: 0rem 0rem !important;
            height:45px;
        }
        ion-grid{
            position:fixed;
        }
    `]


})

export class SortFilterOptionsPage implements OnInit {

    statusOptions: any;
    priorityOptions: any;
    complaintCategoryOptions: any;
    @Input() sortSelected: boolean;
    @Input() filterSelected: boolean;
    @Output() onSelect = new EventEmitter<any>();


    constructor(
        private actionSheetCtrl: ActionSheetController,
        private complaintService: ComplaintService
    ) { }

    ngOnInit() {

        this.getDataRequiredForFiltering();
        // this.statusOptions = JSON.parse(localStorage.getItem('complaintStatusList'));
        // this.priorityOptions = JSON.parse(localStorage.getItem('complaintPriorityList'));
        // this.complaintCategoryOptions = JSON.parse(localStorage.getItem('complaintCategoryOptions'));
    }

    getDataRequiredForFiltering() {
        this.complaintService.fetchDataRequiredForFiltering()
            .subscribe((res: any) => {
                this.statusOptions = res.status;
                this.priorityOptions = res.priority;
                this.complaintCategoryOptions = res.category;
            }, (err: any) => {

            });
    }

    onSort() {
        const actionSheet = this.actionSheetCtrl.create({
            title: 'Sort By',
            buttons: [
                {
                    text: 'Priority',

                    handler: () => {
                        this.onSelect.emit({ sortName: 'priority', filter: null });
                    }
                },
                {
                    text: 'Status',
                    handler: () => {
                        this.onSelect.emit({ sortName: 'status', filter: null });

                    }
                },
                {
                    text: 'Clear',
                    handler: () => {
                        if (!this.sortSelected) { return; }
                        this.onSelect.emit({ sortName: 'clear', filter: null });

                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                    }
                }
            ]
        });

        actionSheet.present();
    }


    onFilter() {
        const actionSheet = this.actionSheetCtrl.create({
            title: 'Filter By',
            buttons: [
                {
                    text: 'Priority',
                    handler: () => {
                        actionSheet.dismiss().then(() => {
                            this.filterBySubCategories(1);
                        });
return false;
                    }
                },
                {
                    text: 'Status',
                    handler: () => {
                        actionSheet.dismiss().then(() => {
                            this.filterBySubCategories(2);
                        });
                        return false;
                    }
                },
                {
                    text: 'Category',
                    handler: () => {
                        actionSheet.dismiss().then(() => {
                            this.filterBySubCategories(3);
                        });
                        return false;
                    }
                },
                {
                    text: 'Clear',
                    handler: () => {
                        if (!this.filterSelected) { return; }
                        this.onSelect.emit({ sortName: null, filter: { filterName: 'clear', id: null } });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                    }
                }
            ]
        });

        actionSheet.present();
    }

    /**id 1 is for priority and 2 is for status */
    filterBySubCategories(id: number) {
        const actionSheet = this.actionSheetCtrl.create();

        if (id == 1) {

            actionSheet.setTitle('Select Priority');

            for (let i = 0; i < this.priorityOptions.length; i++) {
                actionSheet.addButton({
                    text: this.priorityOptions[i].name,
                    handler: () => {
                        this.onSelect.emit({ sortName: null, filter: { filterName: 'priority', id: this.priorityOptions[i].id } });

                    }
                });
            }
        } else if (id == 2) {

            actionSheet.setTitle('Select Status');

            for (let i = 0; i < this.statusOptions.length; i++) {
                actionSheet.addButton({
                    text: this.statusOptions[i].name,
                    handler: () => {
                        this.onSelect.emit({ sortName: null, filter: { filterName: 'status', id: this.statusOptions[i].id } });
                    }
                });
            }
        } else {

            actionSheet.setTitle('Select Category');

            for (let i = 0; i < this.complaintCategoryOptions.length; i++) {
                actionSheet.addButton({
                    text: this.complaintCategoryOptions[i].name,
                    handler: () => {
                        actionSheet.dismiss().then(() => {
                            this.afterCategorySelect(this.complaintCategoryOptions[i]);
                        });
                        return false;
                    }
                });
            }
        }
        actionSheet.addButton({
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
            }
        });
        actionSheet.present();

    }

    afterCategorySelect(selectedCategory: any) {
        console.log(selectedCategory);

        if (selectedCategory.childCategory) {

            const actionSheet = this.actionSheetCtrl.create();

            actionSheet.setTitle('Select Subcategory');

            for (let i = 0; i < selectedCategory.childCategory.length; i++) {
                actionSheet.addButton({
                    text: selectedCategory.childCategory[i].name,
                    handler: () => {
                        this.onSelect.emit({ sortName: null, filter: { filterName: 'category', id: selectedCategory.childCategory[i].id } });
                    }
                });
            }
            actionSheet.addButton({
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                }
            });

            actionSheet.present();
        } else {
            this.onSelect.emit({ sortName: null, filter: { filterName: 'category', id: selectedCategory.id } });

        }
    }

    // afterSubcategorySelect(selectedSubcategory: any) {

    //     const actionSheet = this.actionSheetCtrl.create();
    //     switch (selectedSubcategory.id) {
    //         // further options if needed in future can be added here
    //         case 6: actionSheet.setTitle('Select Student Activities');
    //             break;
    //     }

    //     for (let i = 0; i < selectedSubcategory.childCategory.length; i++) {
    //         actionSheet.addButton({
    //             text: selectedSubcategory.childCategory[i].name || selectedSubcategory.childCategory[i].facultyName,
    //             handler: () => {
    //                 this.onSelect.emit({ sortName: null, filter: { filterName: 'category', id: selectedSubcategory.childCategory[i].id || selectedSubcategory.childCategory[i].facultyId } });
    //             }
    //         });
    //     }

    //     actionSheet.present();
    // }
}